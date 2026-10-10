async (page) => {
  const base = 'http://127.0.0.1:4322'
  const pt = [
    '',
    'apartamentos/',
    'servicos/',
    'galeria/',
    'descobrir-o-algarve/',
    'contactos/',
    'privacidade/',
    'cookies/',
    'apartamentos/t1-duas-pessoas/',
    'apartamentos/t1-quatro-pessoas/',
    'apartamentos/t1-dois-adultos-duas-criancas/',
  ]
  const en = [
    '',
    'apartments/',
    'services/',
    'gallery/',
    'discover-the-algarve/',
    'contacts/',
    'privacy/',
    'cookies/',
    'apartments/one-bedroom-two-guests/',
    'apartments/one-bedroom-four-guests/',
    'apartments/one-bedroom-two-adults-two-children/',
  ]
  const routes = [...pt.map((p) => '/pt/' + p), ...en.map((p) => '/en/' + p)]
  const errors = []
  const failures = []
  const failedRequests = []
  let checked = 0
  const errorListener = (e) => errors.push(e.message)
  const requestListener = (r) => {
    if (!r.url().includes('favicon.ico')) failedRequests.push(r.url())
  }
  page.on('pageerror', errorListener)
  page.on('requestfailed', requestListener)
  for (const width of [360, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    for (const route of routes) {
      const response = await page.goto(base + route)
      await page.evaluate(() => document.fonts.ready)
      const issue = await page.evaluate(() => {
        const visible = (e) => e.getClientRects().length > 0
        const over = [...document.querySelectorAll('main *,header,footer')]
          .filter(
            (e) =>
              visible(e) && e.getBoundingClientRect().right > innerWidth + 2,
          )
          .slice(0, 8)
          .map((e) => e.tagName + '.' + e.className)
        return {
          overflow: document.documentElement.scrollWidth > innerWidth + 2,
          over,
          h1: document.querySelectorAll('h1').length,
          empty: [...document.querySelectorAll('a')].filter(
            (a) => !a.getAttribute('href') || a.getAttribute('href') === '#',
          ).length,
          forbidden: document.querySelectorAll('iframe,form,input[type=date]')
            .length,
        }
      })
      if (
        response.status() !== 200 ||
        issue.overflow ||
        issue.h1 !== 1 ||
        issue.empty ||
        issue.forbidden
      )
        failures.push({ width, route, status: response.status(), ...issue })
      const switchHref = await page.locator('.language').getAttribute('href')
      const expected = route.startsWith('/pt/')
        ? '/en/' + en[pt.indexOf(route.slice(4))]
        : '/pt/' + pt[en.indexOf(route.slice(4))]
      if (switchHref !== expected)
        failures.push({ route, switchHref, expected })
      checked++
    }
  }
  console.log(
    JSON.stringify({
      stage: 'responsive',
      checked,
      failures,
      errors,
      failedRequests,
    }),
  )
  // Screenshots of the actual rendered implementation; load lazy photographs by scrolling.
  for (const [width, label] of [
    [1440, 'desktop'],
    [390, 'mobile'],
  ]) {
    await page.setViewportSize({ width, height: 1000 })
    for (const [slug, name] of [
      ['', 'home'],
      ['apartamentos/', 'apartments'],
      ['apartamentos/t1-dois-adultos-duas-criancas/', 'apartment-detail'],
      ['servicos/', 'services'],
      ['galeria/', 'gallery'],
      ['descobrir-o-algarve/', 'region'],
      ['contactos/', 'contacts'],
    ]) {
      await page.goto(base + '/pt/' + slug)
      await page.evaluate(() => document.fonts.ready)
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 650) {
          window.scrollTo({ top: y, behavior: 'instant' })
          await new Promise((r) => setTimeout(r, 30))
        }
        window.scrollTo({ top: 0, behavior: 'instant' })
      })
      await page.waitForFunction(() =>
        [...document.querySelectorAll('img:not([data-full])')].every(
          (i) => i.complete && i.naturalWidth > 0,
        ),
      )
      await page.screenshot({
        path: `output/playwright/${name}-${label}.png`,
        fullPage: true,
        animations: 'disabled',
      })
    }
  }
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto(base + '/pt/galeria/')
  await page.locator('.gallery-item').first().focus()
  await page.keyboard.press('Enter')
  if (!(await page.locator('dialog').evaluate((d) => d.open)))
    failures.push('Gallery does not open using Enter')
  await page.keyboard.press('ArrowRight')
  if ((await page.locator('[data-count]').innerText()) !== '2 / 10')
    failures.push('Gallery next key')
  await page.keyboard.press('ArrowLeft')
  if ((await page.locator('[data-count]').innerText()) !== '1 / 10')
    failures.push('Gallery previous key')
  for (let i = 0; i < 8; i++) {
    await page.keyboard.press('Tab')
    if (
      !(await page.evaluate(() =>
        document.querySelector('dialog').contains(document.activeElement),
      ))
    )
      failures.push('Focus escaped modal')
  }
  await page.screenshot({ path: 'output/playwright/lightbox-desktop.png' })
  await page.keyboard.press('Escape')
  if (await page.locator('dialog').evaluate((d) => d.open))
    failures.push('Escape did not close modal')
  if (
    !(await page
      .locator('.gallery-item')
      .first()
      .evaluate((e) => e === document.activeElement))
  )
    failures.push('Focus did not return to gallery opener')
  await page.getByRole('button', { name: 'Piscinas', exact: true }).click()
  if ((await page.locator('.gallery-item:visible').count()) !== 1)
    failures.push('Pool filter')
  await page.getByRole('button', { name: 'Todos', exact: true }).click()
  if ((await page.locator('.gallery-item:visible').count()) !== 10)
    failures.push('All filter')
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto(base + '/pt/')
  await page.locator('.menu-toggle').focus()
  await page.keyboard.press('Enter')
  if (
    (await page.locator('.menu-toggle').getAttribute('aria-expanded')) !==
    'true'
  )
    failures.push('Mobile menu')
  await page.keyboard.press('Escape')
  if (
    (await page.locator('.menu-toggle').getAttribute('aria-expanded')) !==
    'false'
  )
    failures.push('Menu Escape')
  await page.locator('.language').click()
  if (new URL(page.url()).pathname !== '/en/')
    failures.push('Language navigation')
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto(base + '/pt/')
  const reduced = await page
    .locator('.button')
    .first()
    .evaluate((e) => getComputedStyle(e).transitionDuration)
  if (reduced !== '0s') failures.push('Reduced motion')
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto(base + '/en/')
  await page.evaluate(() => (document.documentElement.style.fontSize = '200%'))
  if (
    await page.evaluate(
      () => document.documentElement.scrollWidth > innerWidth + 2,
    )
  )
    failures.push('200% text enlargement overflow')
  await page.goto(base + '/not-a-page/')
  if ((await page.locator('h1').count()) !== 1) failures.push('404')
  page.off('pageerror', errorListener)
  page.off('requestfailed', requestListener)
  if (failures.length || errors.length || failedRequests.length)
    throw new Error(
      JSON.stringify({ checked, failures, errors, failedRequests }),
    )
  return { checked, failures, errors, failedRequests }
}
