function getMonthlyTheme() {
    const month = new Date().getMonth() + 1;
    const themes = {
        1: { header_bg: '#e51e77', bg2_bg: '#ffb4c3', footer_bg: '#1e75c8', body_bg: '#2b5a3d', body_text: '#1e75c8', footer_text: '#e51e77' },
        2: { header_bg: '#a23b9b', bg2_bg: '#e6b9d7', footer_bg: '#5675b5', body_bg: '#537c6f', body_text: '#5675b5', footer_text: '#a23b9b' },
        3: { header_bg: '#6059c0', bg2_bg: '#cdbeeb', footer_bg: '#8f75a3', body_bg: '#7b9fa1', body_text: '#8f75a3', footer_text: '#6059c0' },
        4: { header_bg: '#1e77e5', bg2_bg: '#b4c3ff', footer_bg: '#c87591', body_bg: '#a3c2d4', body_text: '#c87591', footer_text: '#1e77e5' },
        5: { header_bg: '#3b9ba2', bg2_bg: '#b4d7b4', footer_bg: '#bf75a3', body_bg: '#9b8fab', body_text: '#b35c7e', footer_text: '#3b9ba2' },
        6: { header_bg: '#59c060', bg2_bg: '#b4eb69', footer_bg: '#b675b5', body_bg: '#935d82', body_text: '#9f436c', footer_text: '#59c060' },
        7: { header_bg: '#77e51e', bg2_bg: '#b4ff1e', footer_bg: '#ae75c8', body_bg: '#8b2b5a', body_text: '#8b2b5a', footer_text: '#77e51e' },
        8: { header_bg: '#9bc01e', bg2_bg: '#cdf850', footer_bg: '#926293', body_bg: '#835f76', body_text: '#7a314a', footer_text: '#76db4e' },
        9: { header_bg: '#c09b1e', bg2_bg: '#e6f282', footer_bg: '#764f5f', body_bg: '#7c9392', body_text: '#6a373a', footer_text: '#75d17e' },
        10: { header_bg: '#e5771e', bg2_bg: '#ffecb4', footer_bg: '#5a3d2b', body_bg: '#75c8ae', body_text: '#5a3d2b', footer_text: '#75c8ae' },
        11: { header_bg: '#e5593b', bg2_bg: '#ffd9b9', footer_bg: '#464f5f', body_bg: '#5ca388', body_text: '#464f5f', footer_text: '#9a8f9b' },
        12: { header_bg: '#e53b59', bg2_bg: '#ffc6be', footer_bg: '#326293', body_bg: '#437e62', body_text: '#326293', footer_text: '#bf5689' }
    };
    const theme = themes[month] || themes[9]; // Fallback to September
    document.documentElement.style.setProperty('--header-bg', theme.header_bg);
    document.documentElement.style.setProperty('--bg2-bg', theme.bg2_bg);
    document.documentElement.style.setProperty('--footer-bg', theme.footer_bg);
    document.documentElement.style.setProperty('--body-bg', theme.body_bg);
    document.documentElement.style.setProperty('--body-text', theme.body_text);
    document.documentElement.style.setProperty('--footer-text', theme.footer_text);
}
window.onload = getMonthlyTheme;
