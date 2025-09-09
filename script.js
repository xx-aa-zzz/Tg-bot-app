/* --- General Styling --- */
:root {
    --primary-color: #bb86fc;
    --primary-variant: #3700b3;
    --secondary-color: #03dac6;
    --background-color: #121212;
    --surface-color: #1e1e1e;
    --on-surface-color: #e1e1e1;
    --on-background-color: #ffffff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Cairo', sans-serif;
    background-color: var(--background-color);
    color: var(--on-background-color);
    background-image: url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80');
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    padding: 20px;
    backdrop-filter: blur(5px);
}

.container {
    width: 100%;
    max-width: 680px;
    background: rgba(30, 30, 30, 0.75);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    padding: 30px;
    text-align: center;
    animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
}

/* --- Profile Section --- */
.profile-picture-wrapper {
    position: relative;
    display: inline-block;
    margin-bottom: 20px;
}

.profile-picture {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 4px solid var(--primary-color);
    object-fit: cover;
    transition: transform 0.3s ease;
}

.profile-picture:hover {
    transform: scale(1.05);
}

.profile-picture-wrapper::before {
    content: '';
    position: absolute;
    top: -6px;
    left: -6px;
    right: -6px;
    bottom: -6px;
    border-radius: 50%;
    border: 2px solid var(--primary-color);
    animation: pulse 2s infinite;
    opacity: 0;
}

@keyframes pulse {
    0% { transform: scale(0.95); opacity: 0.7; }
    70% { transform: scale(1.1); opacity: 0; }
    100% { transform: scale(0.95); opacity: 0; }
}

h1 {
    font-size: 2rem;
    color: var(--on-background-color);
    margin-bottom: 10px;
}

.bio {
    font-size: 1.1rem;
    color: var(--on-surface-color);
    margin-bottom: 25px;
}

/* --- Social Media Links --- */
.social-links {
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    gap: 20px;
}

.social-links a {
    color: var(--on-surface-color);
    font-size: 1.8rem;
    transition: color 0.3s ease, transform 0.3s ease;
}

.social-links a:hover {
    color: var(--primary-color);
    transform: translateY(-5px);
}

/* --- Main Links Section --- */
.main-links {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.link-card {
    background-color: rgba(255, 255, 255, 0.05);
    color: var(--on-surface-color);
    padding: 20px;
    border-radius: 12px;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.link-card:hover {
    background-color: rgba(187, 134, 252, 0.15);
    transform: scale(1.03);
}

.link-icon {
    margin-left: 15px; /* Changed from margin-right to margin-left for RTL */
    font-size: 1.2rem;
    color: var(--secondary-color);
}

/* --- Footer --- */
.footer {
    margin-top: 30px;
    font-size: 0.9rem;
    color: var(--on-surface-color);
    opacity: 0.7;
}

/* --- Responsive Design --- */
@media (max-width: 480px) {
    body {
        padding: 10px;
    }
    .container {
        padding: 20px;
    }
    h1 {
        font-size: 1.8rem;
    }
    .profile-picture {
        width: 120px;
        height: 120px;
    }
}
