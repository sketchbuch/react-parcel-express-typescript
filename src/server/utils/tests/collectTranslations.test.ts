import { collectTranslations } from "../collectTranslations"

describe('collectTranslations()', () => {
  test('Handles invalid paths correctly', () => {
    expect(collectTranslations('')).toEqual({})
    expect(collectTranslations(`${__dirname}/testLocalesEmpty`)).toEqual({})
    expect(collectTranslations(`${__dirname}/testLocalesNoJson`)).toEqual({})
  })

  test('Returns expected result', () => {
    expect(collectTranslations(`${__dirname}/testLocales`)).toEqual(
      {
        "de": {
          "translation": {
            "test": "Test DE",
          },
        },
        "en": {
          "translation": {
            "test": "Test EN",
          },
        },
      })
  })
})
