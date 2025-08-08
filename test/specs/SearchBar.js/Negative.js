
import SearchBar from '../../pageobjects/searchBar.js';

describe('[Target] Search Bar - Single Character Security Input Handling', () => {
  it('should validate all dangerous characters return no results or fallback messages', async () => {
    await SearchBar.validateSecurityInputs();
  });
});
