import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { PageContainer } from '@toolpad/core/PageContainer';


export default function ChartArena() {
    const theme = useTheme();

    return (
        <AppProvider
            theme={theme}
        >
            <Paper sx={{
                p: 2,
                width: '80%',
                margin: '2rem 0',
                boxShadow: 'none',
                background: theme.palette.mode === "dark" ? '#212121' : '#EEEEFF',
                borderRadius: '2rem',
                fontSize: '1rem',
            }}>
                <PageContainer sx={{
                    overflow: 'auto',
                    minHeight: '65vh',
                    maxHeight: '65vh',
                }}>
                    <Grid container spacing={1}>
                        <Grid size={5} />
                    </Grid>
                </PageContainer>
            </Paper>
            <Paper sx={{
                width: '80%',
                borderRadius: '5rem',
                fontSize: '1rem',
                boxShadow: 'none',
                background: theme.palette.mode === "dark" ? '#1A1A1A' : '#F1FDFF'
            }}>
                <input placeholder="Ask Celestia ⭐️" className="message_area" />
            </Paper>
        </AppProvider>
    );
}
