import React, { useState, useEffect } from 'react';
import { themeSettingsApi } from '@/db/api';
import type { ThemeSettings } from '@/types/index';
import { useRefresh } from '@/contexts/RefreshContext';

interface ThemeLayoutProps {
    children: React.ReactNode;
}

const ThemeLayout: React.FC<ThemeLayoutProps> = ({ children }) => {
    const [themeSettings, setThemeSettings] = useState<ThemeSettings | null>(null);
    const { refreshKey } = useRefresh();

    useEffect(() => {
        loadThemeSettings();
    }, [refreshKey]);

    const loadThemeSettings = async () => {
        try {
            const data = await themeSettingsApi.get();
            setThemeSettings(data);
        } catch (error) {
            console.error('Error loading theme settings:', error);
        }
    };

    const pageStyle: React.CSSProperties = {
        backgroundColor: themeSettings?.page_bg_color || '#0A0F1E',
        backgroundImage: themeSettings?.page_bg_image ? `url(${themeSettings.page_bg_image})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        position: 'relative',
        width: '100%'
    };

    return (
        <div style={pageStyle}>
            {children}
        </div>
    );
};

export default ThemeLayout;
