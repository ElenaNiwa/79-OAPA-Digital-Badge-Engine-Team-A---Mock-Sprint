# Mock Sprint Requirements

**Project Name:** Team 79 - Mock sprint
 
**Project Objective:** A styled login page that leads to a team page that includes a snapshot of our team.
 
## In scope

1. UX will style the login page
2. The login page will lead to the team page
3. The team page will include the team name
4. The team page will include each member's:
   - a. Photo – a placeholder image if photo is missing
   - b. Name – placeholder title if name is missing
   - c. Role – placeholder title or empty field if role is missing
   - d. 'About us' blurb – placeholder title or empty field if blurb is missing
5. Dev 1 will implement style change
6. Dev 1 will implement team page
7. Dev 1 will implement Auth Redirect
8. Team page must only be accessible through valid login
9. Team page to be compatible with desktop webpages
10. Accessing the team page without logging in must lead to a redirect page
11. Dev 2 will test the login page
12. Dev 2 will test the team page
13. Dev 2 will test the auth redirect
14. Dev 2 will test edge cases and log bugs

## Out of scope

- Login page authorisation logic
- Session behaviour
- Team page compatible with mobile devices

## Assumptions & constraints

- Must be completed by 15th Aug 2026
- Team member details are hard coded and provided by each team member
- There is a fixed number of 5 team members


## Edge cases

- If missing photo, a placeholder avatar is shown correctly
- If missing name, the placeholder text 'team member' appears
- If missing role, the placeholder text "Team Member" appears
- If missing 'about us' blurb, the placeholder text 'This content is currently unavailable' will replace it
- If not logged in whilst trying to access the team member page, the user is redirected
- If the photo link is incorrect or broken, the placeholder avatar is shown in replacement
