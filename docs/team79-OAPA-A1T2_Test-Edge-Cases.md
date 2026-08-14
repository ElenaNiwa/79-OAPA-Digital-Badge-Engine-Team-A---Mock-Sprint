
# Task 7 – Edge Case Testing and Bug Check

**Tester:** Shamim Ud Doula Shawon  
**Role:** Dev 2  
**Date:** 14 August 2026

## Objective
Test login and team-page edge cases and identify any bugs or unexpected behaviour.

## Test Environment
- Application: Deployed web application
- Browser: Google Chrome
- Device: MacBook

## Test Cases

### Test 1 – Invalid Login
**Steps:**
1. Opened the login page.
2. Entered invalid login credentials.
3. Attempted to log in.

**Expected Result:**  
Login should be rejected and the user should not gain access to the team page.

**Actual Result:**  
Invalid login was handled correctly.

**Result:** PASS

### Test 2 – Direct Team Page Access Without Login
**Steps:**
1. Attempted to access the team-page URL without being logged in.
2. Checked whether unauthorised access was allowed.

**Expected Result:**  
An unauthenticated user should not be able to access protected content.

**Actual Result:**  
Unauthorised access was handled correctly.

**Result:** PASS

### Test 3 – Missing Member Photo
**Steps:**
1. Checked the team page where a member photo was unavailable.
2. Observed the page layout and behaviour.

**Expected Result:**  
The page should continue to display correctly without breaking.

**Actual Result:**  
The page remained functional and no major layout issue occurred.

**Result:** PASS

### Test 4 – Long Blurb
**Steps:**
1. Checked a team-member entry containing a long blurb.
2. Observed the text and card layout.

**Expected Result:**  
Long text should display without breaking the team-page layout.

**Actual Result:**  
The content displayed correctly without breaking the page.

**Result:** PASS

## Bugs Found
No bugs were identified during the tested edge cases.

## Overall Result
Task 7 edge-case testing passed. No outstanding issues were identified.
