import {Button, IconButton, type SxProps, type Theme, Tooltip} from '@mui/material';
import {Link} from 'react-router-dom';
import type {ReactNode} from "react";

export type NavButtonProps = {
    to: string;
    icon: ReactNode;
    label: string;
    hideLabel?: boolean;
};

const ICON_SIZE = 24;
const NavButton = ({to, icon, label, hideLabel = false}: NavButtonProps) => {
    const sx : SxProps<Theme> = {
        borderRadius: 0,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        bgcolor: t => t.palette.background.paper,
        justifyContent: 'center',
        textTransform: 'none',
        '& .MuiSvgIcon-root': {
            fontSize: ICON_SIZE,
        },
    };

    return hideLabel ? (
        <Tooltip title={label}>
            <IconButton size="large" component={Link} to={to} color="primary" sx={sx}>
                {icon}
            </IconButton>
        </Tooltip>
    ) : (
        <Button startIcon={icon} component={Link} to={to} color="primary" sx={sx}>
            {label}
        </Button>
    )
}


export default NavButton;