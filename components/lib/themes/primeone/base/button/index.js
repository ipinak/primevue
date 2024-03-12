export default {
    css: ({ dt }) => `
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: var(--p-button-primary-text-color);
    background: var(--p-button-primary-background);
    border: 1px solid var(--p-button-primary-border-color);
    padding: 0.5rem 1rem;
    font-size: 1rem;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    border-radius: ${dt('rounded.base')};
    outline-color: transparent;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-left {
    margin-right: 0.5rem;
}

.p-button-icon-right {
    order: 1;
    margin-left: 0.5rem;
}

.p-button-icon-top {
    margin-bottom: 0.5rem;
}

.p-button-icon-bottom {
    order: 2;
    margin-top: 0.5rem;
}

.p-button-icon-only {
    justify-content: center;
    width: 2.5rem;
    padding: 0.5rem 0;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button.p-button-icon-only .p-button-icon-left,
.p-button.p-button-icon-only .p-button-icon-right {
    margin: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: 2.5rem;
}

.p-button-sm {
    font-size: 0.875rem;
    padding: 0.375rem 0.875rem;
}

.p-button-sm .p-button-icon {
    font-size: 0.875rem;
}

.p-button-lg {
    font-size: 1.25rem;
    padding: 0.625rem 1.25rem;
}

.p-button-sm .p-button-icon {
    font-size: 1.25rem;
}

.p-button-loading-label-only .p-button-label {
    margin-left: 0.5rem;
}

.p-button-loading-label-only .p-button-loading-icon {
    margin-right: 0;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: 500;
}

.p-fluid .p-button {
    width: 100%;
}

.p-fluid .p-button-icon-only {
    width: 2.5rem;
}

.p-button:not(:disabled):hover {
    background: var(--p-button-primary-background-hover);
    border: 1px solid var(--p-button-primary-border-color-hover);
    color: var(--p-button-primary-text-color-hover);
}

.p-button:not(:disabled):active {
    background: var(--p-button-primary-background-active);
    border: 1px solid var(--p-button-primary-border-color-active);
    color: var(--p-button-primary-text-color-active);
}

.p-button:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} var(--p-button-primary-background);
    outline-offset: ${dt('focus.ring.offset')};
}

.p-button .p-badge {
    margin-left: 0.5rem;
    min-width: 1rem;
    height: 1rem;
    line-height: 1rem;
    background: var(--p-button-primary-text-color);
    color: var(--p-button-primary-background);
}

.p-button-raised {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.p-button-rounded {
    border-radius: 2rem;
}

/* Default Severities */
.p-button-secondary {
    background: var(--p-button-secondary-background);
    border: 1px solid var(--p-button-secondary-border-color);
    color: var(--p-button-secondary-text-color);
}

.p-button-secondary:not(:disabled):hover {
    background: var(--p-button-secondary-background-hover);
    border: 1px solid var(--p-button-secondary-border-color-hover);
    color: var(--p-button-secondary-text-color-hover);
}

.p-button-secondary:not(:disabled):active {
    background: var(--p-button-secondary-background-active);
    border: 1px solid var(--p-button-secondary-border-color-active);
    color: var(--p-button-secondary-text-color-active);
}

.p-button-success {
    background: var(--p-button-success-background);
    border: 1px solid var(--p-button-success-border-color);
    color: var(--p-button-success-text-color);
}

.p-button-success:not(:disabled):hover {
    background: var(--p-button-success-background-hover);
    border: 1px solid var(--p-button-success-border-color-hover);
    color: var(--p-button-success-text-color-hover);
}

.p-button-success:not(:disabled):active {
    background: var(--p-button-success-background-active);
    border: 1px solid var(--p-button-success-border-color-active);
    color: var(--p-button-success-text-color-active);
}

.p-button-success:focus-visible {
    outline-color: var(--p-button-success-background);
}

.p-button-info {
    background: var(--p-button-info-background);
    border: 1px solid var(--p-button-info-border-color);
    color: var(--p-button-info-text-color);
}

.p-button-info:not(:disabled):hover {
    background: var(--p-button-info-background-hover);
    border: 1px solid var(--p-button-info-border-color-hover);
    color: var(--p-button-info-text-color-hover);
}

.p-button-info:not(:disabled):active {
    background: var(--p-button-info-background-active);
    border: 1px solid var(--p-button-info-border-color-active);
    color: var(--p-button-info-text-color-active);
}

.p-button-info:focus-visible {
    outline-color: var(--p-button-info-background);
}

.p-button-warning {
    background: var(--p-button-warn-background);
    border: 1px solid var(--p-button-warn-border-color);
    color: var(--p-button-warn-text-color);
}

.p-button-warning:not(:disabled):hover {
    background: var(--p-button-warn-background-hover);
    border: 1px solid var(--p-button-warn-border-color-hover);
    color: var(--p-button-warn-text-color-hover);
}

.p-button-warning:not(:disabled):active {
    background: var(--p-button-warn-background-active);
    border: 1px solid var(--p-button-warn-border-color-active);
    color: var(--p-button-warn-text-color-active);
}

.p-button-warning:focus-visible {
    outline-color: var(--p-button-warn-background);
}

.p-button-help {
    background: var(--p-button-help-background);
    border: 1px solid var(--p-button-help-border-color);
    color: var(--p-button-help-text-color);
}

.p-button-help:not(:disabled):hover {
    background: var(--p-button-help-background-hover);
    border: 1px solid var(--p-button-help-border-color-hover);
    color: var(--p-button-help-text-color-hover);
}

.p-button-help:not(:disabled):active {
    background: var(--p-button-help-background-active);
    border: 1px solid var(--p-button-help-border-color-active);
    color: var(--p-button-help-text-color-active);
}

.p-button-help:focus-visible {
    outline-color: var(--p-button-help-background);
}

.p-button-danger {
    background: var(--p-button-danger-background);
    border: 1px solid var(--p-button-danger-border-color);
    color: var(--p-button-danger-text-color);
}

.p-button-danger:not(:disabled):hover {
    background: var(--p-button-danger-background-hover);
    border: 1px solid var(--p-button-danger-border-color-hover);
    color: var(--p-button-danger-text-color-hover);
}

.p-button-danger:not(:disabled):active {
    background: var(--p-button-danger-background-active);
    border: 1px solid var(--p-button-danger-border-color-active);
    color: var(--p-button-danger-text-color-active);
}

.p-button-danger:focus-visible {
    outline-color: var(--p-button-danger-background);
}

.p-button-contrast {
    background: var(--p-button-contrast-background);
    border: 1px solid var(--p-button-contrast-border-color);
    color: var(--p-button-contrast-text-color);
}

.p-button-contrast:not(:disabled):hover {
    background: var(--p-button-contrast-background-hover);
    border: 1px solid var(--p-button-contrast-border-color-hover);
    color: var(--p-button-contrast-text-color-hover);
}

.p-button-contrast:not(:disabled):active {
    background: var(--p-button-contrast-background-active);
    border: 1px solid var(--p-button-contrast-border-color-active);
    color: var(--p-button-contrast-text-color-active);
}

.p-button-contrast:focus-visible {
    outline-color: var(--p-button-contrast-background);
}


/* Outlined Buttons */
.p-button-outlined {
    background: transparent;
    border-color: var(--p-button-outlined-primary-border-color);
    color: var(--p-button-outlined-primary-text-color);
}

.p-button-outlined:not(:disabled):hover {
    background: var(--p-button-outlined-primary-background-hover);
    border-color: var(--p-button-outlined-primary-border-color);
    color: var(--p-button-outlined-primary-text-color);
}

.p-button-outlined:not(:disabled):active {
    background: var(--p-button-outlined-primary-background-active);
    border-color: var(--p-button-outlined-primary-border-color);
    color: var(--p-button-outlined-primary-text-color);
}

.p-button-outlined.p-button-secondary {
    border-color: var(--p-button-outlined-secondary-border-color);
    color: var(--p-button-outlined-secondary-text-color);
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: var(--p-button-outlined-secondary-background-hover);
    border-color: var(--p-button-outlined-secondary-border-color);
    color: var(--p-button-outlined-secondary-text-color);
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: var(--p-button-outlined-secondary-background-active);
    border-color: var(--p-button-outlined-secondary-border-color);
    color: var(--p-button-outlined-secondary-text-color);
}

.p-button-outlined.p-button-success {
    border-color: var(--p-button-outlined-success-border-color);
    color: var(--p-button-outlined-success-text-color);
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: var(--p-button-outlined-success-background-hover);
    border-color: var(--p-button-outlined-success-border-color);
    color: var(--p-button-outlined-success-text-color);
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: var(--p-button-outlined-success-background-active);
    border-color: var(--p-button-outlined-success-border-color);
    color: var(--p-button-outlined-success-text-color);
}

.p-button-outlined.p-button-info {
    border-color: var(--p-button-outlined-info-border-color);
    color: var(--p-button-outlined-info-text-color);
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: var(--p-button-outlined-info-background-hover);
    border-color: var(--p-button-outlined-info-border-color);
    color: var(--p-button-outlined-info-text-color);
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: var(--p-button-outlined-info-background-active);
    border-color: var(--p-button-outlined-info-border-color);
    color: var(--p-button-outlined-info-text-color);
}

.p-button-outlined.p-button-warning {
    border-color: var(--p-button-outlined-warn-border-color);
    color: var(--p-button-outlined-warn-text-color);
}

.p-button-outlined.p-button-warning:not(:disabled):hover {
    background: var(--p-button-outlined-warn-background-hover);
    border-color: var(--p-button-outlined-warn-border-color);
    color: var(--p-button-outlined-warn-text-color);
}

.p-button-outlined.p-button-warning:not(:disabled):active {
    background: var(--p-button-outlined-warn-background-active);
    border-color: var(--p-button-outlined-warn-border-color);
    color: var(--p-button-outlined-warn-text-color);
}

.p-button-outlined.p-button-help {
    border-color: var(--p-button-outlined-help-border-color);
    color: var(--p-button-outlined-help-text-color);
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: var(--p-button-outlined-help-background-hover);
    border-color: var(--p-button-outlined-help-border-color);
    color: var(--p-button-outlined-help-text-color);
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: var(--p-button-outlined-help-background-active);
    border-color: var(--p-button-outlined-help-border-color);
    color: var(--p-button-outlined-help-text-color);
}

.p-button-outlined.p-button-danger {
    border-color: var(--p-button-outlined-danger-border-color);
    color: var(--p-button-outlined-danger-text-color);
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: var(--p-button-outlined-danger-background-hover);
    border-color: var(--p-button-outlined-danger-border-color);
    color: var(--p-button-outlined-danger-text-color);
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: var(--p-button-outlined-danger-background-active);
    border-color: var(--p-button-outlined-danger-border-color);
    color: var(--p-button-outlined-danger-text-color);
}

.p-button-outlined.p-button-contrast {
    border-color: var(--p-button-outlined-contrast-border-color);
    color: var(--p-button-outlined-contrast-text-color);
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: var(--p-button-outlined-contrast-background-hover);
    border-color: var(--p-button-outlined-contrast-border-color);
    color: var(--p-button-outlined-contrast-text-color);
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: var(--p-button-outlined-contrast-background-active);
    border-color: var(--p-button-outlined-contrast-border-color);
    color: var(--p-button-outlined-contrast-text-color);
}

.p-button-outlined.p-button-plain {
    border-color: var(--p-button-outlined-plain-border-color);
    color: var(--p-button-outlined-plain-text-color);
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: var(--p-button-outlined-plain-background-hover);
    border-color: var(--p-button-outlined-plain-border-color);
    color: var(--p-button-outlined-plain-text-color);
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: var(--p-button-outlined-plain-background-active);
    border-color: var(--p-button-outlined-plain-border-color);
    color: var(--p-button-outlined-plain-text-color);
}

/* Text Button */
.p-button-text {
    background: transparent;
    border-color: transparent;
    color: var(--p-button-text-primary-text-color);
}

.p-button-text:not(:disabled):hover {
    background: var(--p-button-text-primary-background-hover);
    border-color: transparent;
    color: var(--p-button-text-primary-text-color);
}

.p-button-text:not(:disabled):active {
    background: var(--p-button-text-primary-background-active);
    border-color: transparent;
    color: var(--p-button-text-primary-text-color);
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: var(--p-button-text-secondary-text-color);
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: var(--p-button-text-secondary-background-hover);
    border-color: transparent;
    color: var(--p-button-text-secondary-text-color);
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: var(--p-button-text-secondary-background-active);
    border-color: transparent;
    color: var(--p-button-text-secondary-text-color);
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: var(--p-button-text-success-text-color);
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: var(--p-button-text-success-background-hover);
    border-color: transparent;
    color: var(--p-button-text-success-text-color);
}

.p-button-text.p-button-success:not(:disabled):active {
    background: var(--p-button-text-success-background-active);
    border-color: transparent;
    color: var(--p-button-text-success-text-color);
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: var(--p-button-text-info-text-color);
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: var(--p-button-text-info-background-hover);
    border-color: transparent;
    color: var(--p-button-text-info-text-color);
}

.p-button-text.p-button-info:not(:disabled):active {
    background: var(--p-button-text-info-background-active);
    border-color: transparent;
    color: var(--p-button-text-info-text-color);
}

.p-button-text.p-button-warning {
    background: transparent;
    border-color: transparent;
    color: var(--p-button-text-warn-text-color);
}

.p-button-text.p-button-warning:not(:disabled):hover {
    background: var(--p-button-text-warn-background-hover);
    border-color: transparent;
    color: var(--p-button-text-warn-text-color);
}

.p-button-text.p-button-warning:not(:disabled):active {
    background: var(--p-button-text-warn-background-active);
    border-color: transparent;
    color: var(--p-button-text-warn-text-color);
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: var(--p-button-text-help-text-color);
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: var(--p-button-text-help-background-hover);
    border-color: transparent;
    color: var(--p-button-text-help-text-color);
}

.p-button-text.p-button-help:not(:disabled):active {
    background: var(--p-button-text-help-background-active);
    border-color: transparent;
    color: var(--p-button-text-help-text-color);
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: var(--p-button-text-danger-text-color);
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: var(--p-button-text-danger-background-hover);
    border-color: transparent;
    color: var(--p-button-text-danger-text-color);
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: var(--p-button-text-danger-background-active);
    border-color: transparent;
    color: var(--p-button-text-danger-text-color);
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: var(--p-button-text-plain-text-color);
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: var(--p-button-text-plain-background-hover);
    border-color: transparent;
    color: var(--p-button-text-plain-text-color);
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: var(--p-button-text-plain-background-active);
    border-color: transparent;
    color: var(--p-button-text-plain-text-color);
}

/* Link Button */
.p-button-link {
    background: transparent;
    border-color: transparent;
    color: var(--p-button-link-text-color);
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: var(--p-button-link-text-color-hover);
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: var(--p-button-link-text-color-active);
}

.p-buttonset .p-button {
    margin: 0;
}
.p-buttonset .p-button:not(:last-child),
.p-buttonset .p-button:not(:last-child):hover {
    border-right: 0 none;
}

.p-buttonset .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-buttonset .p-button:first-of-type:not(:only-of-type) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-buttonset .p-button:last-of-type:not(:only-of-type) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-buttonset .p-button:focus-visible {
    position: relative;
    z-index: 1;
}

.p-fluid .p-buttonset {
    display: flex;
}

.p-fluid .p-buttonset .p-button {
    flex: 1;
}
`
};
