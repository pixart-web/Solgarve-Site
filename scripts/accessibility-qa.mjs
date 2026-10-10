async (page) => {
  const base = 'http://127.0.0.1:4322'
  const results = []
  for (const [width, route] of [
    [1440, '/pt/'],
    [390, '/pt/'],
    [1440, '/pt/apartamentos/'],
    [390, '/en/apartments/one-bedroom-two-adults-two-children/'],
    [1440, '/pt/servicos/'],
    [390, '/pt/galeria/'],
    [1440, '/pt/contactos/'],
    [390, '/en/discover-the-algarve/'],
    [1440, '/pt/privacidade/'],
  ]) {
    await page.setViewportSize({ width, height: 900 })
    await page.goto(base + route)
    await page.evaluate(() => document.fonts.ready)
    await page.addScriptTag({ path: 'node_modules/axe-core/axe.min.js' })
    const violations = await page.evaluate(async () => {
      const r = await axe.run(document, {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'],
        },
      })
      return r.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.map((n) => ({
          target: n.target,
          summary: n.failureSummary,
        })),
      }))
    })
    results.push({ width, route, violations })
  }
  return results
}
