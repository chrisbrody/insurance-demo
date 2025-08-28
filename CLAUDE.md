You're to act as an expert web developer and build a simple, clickable HTML, CSS, and JavaScript (using jQuery) prototype based on a series of wireframe found here: [wireframe url](https://app.mockflow.com/view/MQ05mrf1qsb#/page/00aa8c396e864a21bea22a4b365b82e1/mode/view) - also found on my computer: file:///C:/Users/Babygrapes/Downloads/Wireframe-Member%20login.pdf

# CRITICAL - DO NO IGNORE:  When completing a section make sure to mark [X] so we know it's complete

## CURRENT STATUS: REQUIRES UPDATES TO MATCH WIREFRAME SPECIFICATIONS

### COMPLETED BASIC IMPLEMENTATION (Phase 1-5)
- ✅ Basic project structure and 8 HTML files created
- ✅ Core navigation flow implemented
- ✅ Basic styling and jQuery functionality added
- ✅ Initial testing completed

---

## REQUIRED UPDATES TO MATCH WIREFRAME (Based on PDF Analysis)

### Phase 6: Critical Wireframe Compliance Updates

#### 14. **[ ] Update member-profile.html** (Page 9 of wireframe - "Members Sign In Page")
**Current Issues**: Page doesn't match wireframe layout
**Required Changes**:
- Replace existing content with "MEMBERS SIGN IN PAGE" header
- Add three input fields in top row: "CARRIER NAME", "HEAD QUARTERS ADDRESS", "HOME OFFICE PHONE #" 
- Add full-width message box: "ALL COMPANIES AFFILIATED WITH YOU. SEARCHES FOR ANY AFFILIANTIONS WILL BE DIRECTED TO YOUR MAIN PAGE."
- Add "CHECK OFF ALL PRODUCTS YOUR COMPANY OFFERS" section
- Create expanded product grid with all insurance types:
  - Row 1: ANNUITY, AUTOMOBILE, CANCER, DISABILITY, LONG TERM CARE, MOTORCYCLE, RV, HEALTH
  - Row 2: HOME OWNERS, LIABILITY, EARTHQUAKE, **LIFE** (highlighted in red border), CRITICAL ILLNESS, GROUP, TRAVEL
  - Row 3: WORKMAN COMP, "ENTER IN YOUR OWN PRODUCT...." (text input field)

#### 15. **[ ] Update term-life-contact.html** (Page 7 of wireframe - Contact Grid Layout)
**Current Issues**: Missing specific contact details from wireframe
**Required Changes**:
- Update to show 6 contact boxes (2 rows of 3) instead of 4
- Box 1: "File a death claim: 800-800-5555" / "Hit Prompt: 3, then 4, then 1" / Mailing address: "7891 Brick Road St. Miami, FL 31152. Attn: Claim Dept"
- Box 2: "Change your current Bank: 800-800-4444" / "Hit Prompt: 1, then 2, then5" / Mailing address: "7890 St. Miami, FL 31152. Attn: Payment Dept"
- Box 3: "Change Owner: 800/800-3333" / "Hit Prompt: 5, then 2, then 2" / Mailing address: "8749 Broad St. Louisville, KY 40015. Change Dept."
- Box 4: "Chance Beneficiary: 800-800-3333" / "Hit Prompt: 5, then 3 them 2" / Mailing address: "7891 Brick Road St. Miami, FL 31152. Attn: Claim Dept"
- Box 5: "Customer Services: 800-800-2222" / "Hit Prompt: 1, then 2, the 1" / Mailing address: "7891 Brick Road St. Miami, FL 31152. Attn: Claim Dept"

#### 16. **[ ] Update permanent-life-contact.html** (Page 11 of wireframe)
**Current Issues**: Missing structured contact information from wireframe
**Required Changes**:
- Add "PERMANENT LIFE INSURANCE" header
- Create 4-box grid layout:
  - **Premium Payments or Questions**: 800-555-5555 (Hit option 3, then option 1, then Option 2) / Mailing address: 1458 West Centeral St, Hartford, CT 10058 / Email: AcmePremiums@Acme.com
  - **Cash values, invoice ledger & questions**: 800-555-9999 (Hitoption 1, option 1, then option 3)
  - **Change bank accounts**: 800-555-8888 (Hit option 5, then option 1, then option 1) / Mailing address: 1880 West Centeral St, Hartford, CT 10058 / Email: AcmeBank@Acme.com / Download form here: Backform.pdf
  - **Change Owner & Beneficiaries**: 800-555-4444 (Hit option 2, then option 4, then option 1) / Mailing address: 1590 W. Central St. Hartford, CT 10058 / Email: AcmeChange@Acme.com / Download form here: changeform.pdf

#### 17. **[ ] Update become-a-member.html** (Page 12 of wireframe - Multi-step flow)
**Current Issues**: Missing complete member onboarding flow
**Required Changes**:
- Add "Become a member" initial box with arrow flow
- Add "What does becoming a member mean" info box
- Add "All benefits and costs to becoming a member" details box  
- Add "Send us a request to become a member" action box
- Add "Please fill in all your information to confirm your carrier is eligible" form section
- Add form fields: "Your name, your company email address", "Company name and H.O. Address", "Company website", "Company phone number"
- Add "Our staff will confirm your company is eligible" status box
- Add "Once confirmed, you will recieve a link to create your account" final step

#### 18. **[ ] Update new-member-setup.html** (Page 3 of wireframe - Complete onboarding flow)
**Current Issues**: Missing the complete wireframe flow structure
**Required Changes**:
- Start with "Congratulations on becoming member" message
- Add "Here is your login link" with "Acme.memeber/Login" text
- Add "Create Login & PW" step
- Add "Enter in banking info" with side note "Your 1st payment will not be due for 6 months. Cancel anytime"
- Add employee security section: "For security purposes, please enter in 2 additional company employees" / "All 3 parties will be emailed when any changes occur" / "Employee #2 name & company email address" / "Employee #3 name & company email address"
- Add department contact info: "Dept email address", "Dept mailing address", "Dept phone #, includes pompts to shorten waittimes"
- Add "Each product will include the following" leading to "A list of products will appear"
- Add final "Choose all products your company offers" step

#### 19. **[ ] Enhance life-insurance-types.html** (Page 6 & 10 of wireframe)
**Current Issues**: Missing complete layout structure
**Required Changes**:
- Ensure "CHOOSE TYPE OF LIFE INSURANCE" header
- Update grid to show: TERM LIFE INSURANCE (with red border highlight), WHOLE LIFE INSURANCE, UNIVERSAL LIFE INSURANCE, VARIABLE LIFE INSURANCE
- Add "What is..." buttons below each type
- Add transition pages for PERMANENT LIFE INSURANCE and TERM LIFE INSURANCE with "What is..." buttons

#### 20. **[ ] Update carrier-details.html** (Page 5 of wireframe - ACME Details)
**Current Issues**: Missing specific ACME company layout
**Required Changes**:
- Ensure "ACME Insurance company of America" header
- Add three info boxes: "Main website: acme.com", "Head Quarters: 15210 Clover Blvd. Louisville, KY 40018", "Main phone number: 800-800-8000"
- Add "Product Line" section header
- Create product grid: **LIFE INSURANCE** (highlighted in blue), ANNUITY, AUTO/MOTORCYCLE/RV, DISABILITY, LONG TERM CARE, CANCER, HOME OWNERS, LIABILITY, HEALTH

### Phase 7: Navigation & User Experience
#### 21. **[ ] Implement complete user flow navigation**
- Ensure all wireframe page transitions work correctly
- Test member onboarding process from start to finish
- Verify product selection flows lead to correct contact pages
- Test search functionality matches wireframe specifications

### Phase 8: Final Wireframe Validation
#### 22. **[ ] Complete wireframe compliance check**
- Verify each page matches corresponding wireframe page exactly
- Test all interactive elements function as specified
- Ensure proper highlighting and color coding (red borders, blue highlights)
- Validate all phone numbers, addresses, and contact information match wireframe

---

## PRIORITY ORDER FOR UPDATES:
1. **member-profile.html** (Most critical - completely different from wireframe)
2. **new-member-setup.html** (Missing complete onboarding flow)
3. **Contact pages** (term-life-contact.html and permanent-life-contact.html)
4. **become-a-member.html** (Missing multi-step flow)
5. **carrier-details.html** and **life-insurance-types.html** (Minor layout updates)

### ** General Styling (`style.css`)**

*   Use a sans-serif font like Arial or Helvetica.
*   Use a neutral color palette (white background, black/grey text).
*   Use simple borders for boxes and containers as seen in the wireframes.
*   Use flexbox or CSS grid to create the layouts for the search sections, product grids, and contact info boxes.
*   Style links and buttons to be clean and simple. Add a hover effect for better user experience.
*   Make the layout responsive enough to be usable on a standard desktop screen.