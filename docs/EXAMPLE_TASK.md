TASK ID: UX-014
TITLE: Tour-details page specification
OWNER: UI/UX expert
STATUS: Ready
PRIORITY: High

OBJECTIVE
Define the information hierarchy and conversion flow for the tour page.

INPUTS

- Master rebuild plan
- Current Omaya tour pages
- Approved tour content model
- SEO requirements
- Existing brand assets

DELIVERABLES

- Page objective
- Primary audience
- Section order
- Desktop behaviour
- Mobile behaviour
- Primary and secondary CTAs
- Trust elements
- Required content
- Empty and error states
- Accessibility considerations

CONSTRAINTS

- No Angular implementation
- No architecture changes
- Must support prerendering
- Must use fields available in the approved tour model

DEPENDENCIES

- Content model ADR approved

OUTPUT LOCATION
docs/specifications/tour-page-ux.md

HANDOFF TO
Angular Frontend expert

ACCEPTANCE CRITERIA

- Every tour-model field has a defined presentation location
- Mobile CTA behaviour is defined
- Missing departure dates are handled
- Enquiry path is specified
