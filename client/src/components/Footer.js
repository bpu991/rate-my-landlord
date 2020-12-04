import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import "../css-styles/footer.css"

function Contributors() {
    return (
        <Typography variant="inherit" color="inherit" align="center">
            Created by:
            {' '}
            <Link color="inherit" href="https://bpu991.github.io./">
                Benjamin Pu
            </Link> {' '}
        </Typography>
    )
}

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor: '#07518A',
        
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="sm">
                <div className='footer-container'>
                    <Contributors />
                </div>
            </Container>
        </footer>
    );
}

export default Footer;