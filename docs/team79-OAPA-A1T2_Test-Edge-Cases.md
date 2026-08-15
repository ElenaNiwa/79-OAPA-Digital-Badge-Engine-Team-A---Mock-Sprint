
# Task 8 – Edge Case Testing and Bug Check

**Tester:** Shamim Ud Doula Shawon
**Role:** Dev 2
**Date:** 15 August 2026

## Objective

Test the login and team-page edge cases defined in the project requirements and identify any bugs or unexpected behaviour. Additional team-member edge cases were tested locally by temporarily modifying test data.

## Test Environment

* **Application:** Deployed web application and local development environment
* **Browser:** Google Chrome
* **Device:** MacBook
* **Local testing method:** Team-member data was temporarily modified locally to simulate missing or invalid values. These temporary testing changes were not committed to the GitHub repository.

---

## Test 1 – Invalid Login

**Steps:**

1. Opened the login page.
2. Entered invalid login credentials.
3. Attempted to log in.

**Expected Result:**
Login should be rejected and the user should not gain access to the team page.

**Actual Result:**
The invalid login was rejected and access to the team page was not provided.

**Result:** PASS

---

## Test 2 – Direct Team Page Access Without Login

**Steps:**

1. Opened the team-page URL without being logged in.
2. Attempted to access the protected team page directly.

**Expected Result:**
An unauthenticated user should not be able to access the team page and should be redirected to the login page.

**Actual Result:**
Direct access without login was prevented and the user was redirected.

**Result:** PASS

---

## Test 3 – Missing Photo

**Steps:**

1. Temporarily set a team member's `photoUrl` to an empty value.
2. Saved the change.
3. Viewed the team page locally.
4. Observed the affected team-member card.

**Expected Result:**
A placeholder avatar should appear when the team-member photo is missing.

**Actual Result:**
A grey placeholder avatar appeared in place of the missing photo. The rest of the team-member card displayed correctly.

**Result:** PASS

---

## Test 4 – Missing Name

**Steps:**

1. Temporarily set a team member's `name` to an empty value.
2. Saved the change.
3. Viewed the team page locally.
4. Observed the affected team-member card.

**Expected Result:**
A placeholder title should appear when the team-member name is missing.

**Actual Result:**
The text `team member` appeared in place of the missing name.

**Result:** PASS

---

## Test 5 – Missing Role

**Steps:**

1. Restored the team member's name.
2. Temporarily set the team member's `role` to an empty value.
3. Saved the change.
4. Viewed the team page locally.

**Expected Result:**
A placeholder title or empty role field should be displayed when the role is missing.

**Actual Result:**
The role displayed as `Team Member`.

**Result:** PASS

---

## Test 6 – Missing Blurb

**Steps:**

1. Restored the team member's role.
2. Temporarily set the team member's `blurb` to an empty value.
3. Saved the change.
4. Viewed the team page locally.

**Expected Result:**
A placeholder message or empty field should be displayed when the blurb is missing.

**Actual Result:**
The message `This content is currently unavailable` was displayed.

**Result:** PASS

---

## Test 7 – Broken Photo Link

**Steps:**

1. Restored the team member's blurb.
2. Temporarily changed the `photoUrl` to a file path that did not exist.
3. Saved the change.
4. Viewed the team page locally.

**Expected Result:**
A broken photo link should be handled gracefully without breaking the team-member card.

**Actual Result:**
A grey placeholder avatar appeared instead of the broken image. The team-member card remained functional and the page layout was not affected.

**Result:** PASS

---

## Test 8 – Long Blurb

**Steps:**

1. Viewed a team-member card containing an unusually long blurb.
2. Checked the text display and card layout.

**Expected Result:**
The longer text should display without breaking the team-page layout.

**Actual Result:**
The long blurb displayed correctly and did not cause the team-page layout to break.

**Result:** PASS

---

## Bugs Found

No bugs were identified during the completed edge-case testing.

## Overall Result

All tested edge cases passed successfully. Missing photo, missing name, missing role, missing blurb, broken photo link, long-blurb behaviour, invalid login, and unauthenticated direct access were handled without breaking the application or team-page layout.

The temporary local test data was restored after testing and was not committed to the repository.

