export default {
    css: ({ dt }) => `
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
    background: var(--p-avatar-background);
    border-radius: ${dt('rounded.base')};
}

.p-avatar-image {
    background-color: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: 1rem;
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
}

.p-avatar-lg .p-avatar-icon {
    font-size: 1.5rem;
}

.p-avatar-xl {
    width: 4rem;
    height: 4rem;
    font-size: 2rem;
}

.p-avatar-xl .p-avatar-icon {
    font-size: 2rem;
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-left: -1rem;
}

.p-avatar-group .p-avatar {
    border: 2px solid var(--p-avatar-border-color);
}
    `
};
