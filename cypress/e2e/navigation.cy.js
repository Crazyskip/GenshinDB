describe("Large Navigation", () => {
  it("should navigate to the Albedo characters page and navigate through tabs", () => {
    // Set viewport to large screen size
    cy.viewport("macbook-16");

    // Start from the index page
    cy.visit("http://localhost:3001/");

    // Index page should contain a h1 with "Characters"
    cy.contains("h1", "Characters");

    // Find a link with an href attribute containing "characters/albedo" and click it
    cy.get('a[href*="characters/albedo"]').click();

    // The new url should include "/characters/albedo"
    cy.url().should("include", "/characters/albedo");

    // The character page should contain a h1 with "ALBEDO"
    cy.contains("h1", "ALBEDO");

    // The character page should display a h3 with "Talents"
    cy.contains("h3", "Talents");

    // The character page should not display a h3 with "Ascension"
    cy.contains("h3", "Ascension").should("not.exist");

    // Find a tab item h4 containing "Ascension" and click it
    cy.contains("h4", "Ascension").click();

    // The new tab should contain a h3 with "Ascension"
    cy.contains("h3", "Ascension");

    // The character page should not display a h3 with "Talents"
    cy.contains("h3", "Talents").should("not.exist");
  });

  it("should navigate to the weapons page", () => {
    // Set viewport to large screen size
    cy.viewport("macbook-16");

    // Find a link with an href attribute containing "weapons" and click it
    cy.get('a[href*="weapons"]').click();

    // The new url should include "/weapons"
    cy.url().should("include", "/weapons");

    // The new page should contain an h1 with "Weapons"
    cy.contains("h1", "Weapons");
  });

  it("should navigate to the weapon Aqua Simulacra page", () => {
    // Set viewport to large screen size
    cy.viewport("macbook-16");

    // Find a link with an href attribute containing "aqua_simulacra" and click it
    cy.get('a[href*="aqua_simulacra"]').click();

    // The new url should include "/weapons/aqua_simulacra"
    cy.url().should("include", "/weapons/aqua_simulacra");

    // The new page should contain an h1 with "AQUA SIMULACRA"
    cy.contains("h1", "AQUA SIMULACRA");
  });

  it("should navigate to the artifacts page", () => {
    // Set viewport to large screen size
    cy.viewport("macbook-16");

    // Find a link with an href attribute containing "artifacts" and click it
    cy.get('a[href*="artifacts"]').click();

    // The new url should include "/artifacts"
    cy.url().should("include", "/artifacts");

    // The new page should contain an h1 with "Artifacts"
    cy.contains("h1", "Artifacts");
  });

  it("should navigate to the artifact Archaic Petra page", () => {
    // Set viewport to large screen size
    cy.viewport("macbook-16");

    // Find a link with an href attribute containing "aqua_simulacra" and click it
    cy.get('a[href*="archaic_petra"]').click();

    // The new url should include "/artifacts/archaic_petra"
    cy.url().should("include", "/artifacts/archaic_petra");

    // The new page should contain an h1 with "ARCHAIC PETRA"
    cy.contains("h1", "ARCHAIC PETRA");
  });

  it("should navigate to the spiral abyss page", () => {
    // Set viewport to large screen size
    cy.viewport("macbook-16");

    // Find a link with an href attribute containing "abyss" and click it
    cy.get('a[href*="abyss"]').click();

    // The new url should include "/abyss"
    cy.url().should("include", "/abyss");

    // The new page should contain an h1 with "Spiral Abyss"
    cy.contains("h1", "Spiral Abyss");
  });
});

describe("Small Navigation", () => {
  it("should navigate to the Albedo characters page and navigate through tabs", () => {
    // Set viewport to small screen size
    cy.viewport("iphone-xr");

    // Start from the index page
    cy.visit("http://localhost:3001/");

    // Index page should contain a h1 with "Characters"
    cy.contains("h1", "Characters");

    // Find a link with an href attribute containing "characters/albedo" and click it
    cy.get('a[href*="characters/albedo"]').click();

    // The new url should include "/characters/albedo"
    cy.url().should("include", "/characters/albedo");

    // The character page should contain a h1 with "ALBEDO"
    cy.contains("h1", "ALBEDO");

    // The character page should display a h3 with "Talents"
    cy.contains("h3", "Talents");

    // The character page should not display a h3 with "Ascension"
    cy.contains("h3", "Ascension").should("not.exist");

    // Find a tab item h4 containing "Ascension" and click it
    cy.contains("h4", "Ascension").click();

    // The new tab should contain a h3 with "Ascension"
    cy.contains("h3", "Ascension");

    // The character page should not display a h3 with "Talents"
    cy.contains("h3", "Talents").should("not.exist");
  });

  it("should navigate to the weapons page", () => {
    // Set viewport to small screen size
    cy.viewport("iphone-xr");

    // Find toggle nav button and click it
    cy.get("#toggle-nav").click();

    // Find a link with an href attribute containing "weapons" and click it
    cy.get('a[href*="weapons"]').click();

    // The new url should include "/weapons"
    cy.url().should("include", "/weapons");

    // The new page should contain an h1 with "Weapons"
    cy.contains("h1", "Weapons");
  });

  it("should navigate to the weapon Aqua Simulacra page", () => {
    // Set viewport to small screen size
    cy.viewport("iphone-xr");

    // Find a link with an href attribute containing "aqua_simulacra" and click it
    cy.get('a[href*="aqua_simulacra"]').click();

    // The new url should include "/weapons/aqua_simulacra"
    cy.url().should("include", "/weapons/aqua_simulacra");

    // The new page should contain an h1 with "AQUA SIMULACRA"
    cy.contains("h1", "AQUA SIMULACRA");
  });

  it("should navigate to the artifacts page", () => {
    // Set viewport to large screen size
    cy.viewport("iphone-xr");

    // Find toggle nav button and click it
    cy.get("#toggle-nav").click();

    // Find a link with an href attribute containing "artifacts" and click it
    cy.get('a[href*="artifacts"]').click();

    // The new url should include "/artifacts"
    cy.url().should("include", "/artifacts");

    // The new page should contain an h1 with "Artifacts"
    cy.contains("h1", "Artifacts");
  });

  it("should navigate to the artifact Archaic Petra page", () => {
    // Set viewport to large screen size
    cy.viewport("iphone-xr");

    // Find a link with an href attribute containing "aqua_simulacra" and click it
    cy.get('a[href*="archaic_petra"]').click();

    // The new url should include "/artifacts/archaic_petra"
    cy.url().should("include", "/artifacts/archaic_petra");

    // The new page should contain an h1 with "ARCHAIC PETRA"
    cy.contains("h1", "ARCHAIC PETRA");
  });

  it("should navigate to the spiral abyss page", () => {
    // Set viewport to large screen size
    cy.viewport("iphone-xr");

    // Find toggle nav button and click it
    cy.get("#toggle-nav").click();

    // Find a link with an href attribute containing "abyss" and click it
    cy.get('a[href*="abyss"]').click();

    // The new url should include "/abyss"
    cy.url().should("include", "/abyss");

    // The new page should contain an h1 with "Spiral Abyss"
    cy.contains("h1", "Spiral Abyss");
  });
});
