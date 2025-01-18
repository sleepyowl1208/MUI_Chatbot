import Message from '@mui/icons-material/Message';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import AppLogo from '../../assets/app_logo.png';
import ChatArena from '../ChatArena/ChatArena';

const NAVIGATION: Navigation = [
    // {
    //     kind: 'header',
    //     title: 'Main items',
    // },
    {
        segment: 'new chat',
        title: 'New Chat',
        icon: <Message />
    },
    // {
    //     segment: 'dashboard',
    //     title: 'Dashboard',
    //     icon: <DashboardIcon />,
    // },
    // {
    //     kind: 'divider',
    // },
    //This is for the session
    {
        kind: 'header',
        title: 'Previously searched ',
    },
    {
        segment: 'Session 1',
        title: 'Session 1', //This should be renamed accordingly
    },
    {
        segment: 'Session 2',
        title: 'Session 2', //This should be renamed accordingly
    },
    {
        segment: 'Session 3',
        title: 'Session 3', //This should be renamed accordingly
    },
    {
        segment: 'Session 4',
        title: 'Session 4', //This should be renamed accordingly
    },
    {
        segment: 'Session 5',
        title: 'Session 5', //This should be renamed accordingly
    }
    // {
    //     segment: 'reports',
    //     title: 'Reports',
    //     icon: <BarChartIcon />,
    //     children: [
    //         {
    //             segment: 'sales',
    //             title: 'Sales',
    //             icon: <DescriptionIcon />,
    //         },
    //         {
    //             segment: 'traffic',
    //             title: 'Traffic',
    //             icon: <DescriptionIcon />,
    //         },
    //     ],
    // },
    // {
    //     segment: 'integrations',
    //     title: 'Integrations',
    //     icon: <LayersIcon />,
    // },
];

const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});

export default function Home() {

    const router = useDemoRouter('/dashboard');

    return (
        <AppProvider
            navigation={NAVIGATION}
            router={router}
            theme={theme}
            branding={{
                title: '',
                logo: <img src={AppLogo} className='app__logo' alt="App Logo" />
            }}
        >
            <DashboardLayout>
                <Box
                    sx={{
                        py: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    <ChatArena />
                </Box>
            </DashboardLayout>
        </AppProvider>
    );
}
