import { React, useEffect, useState } from "react";
import {
    Box,
    Devider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from "@mui/material";
import {
    SettingOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    ReceiptLongOutlined,
    Groups2Outlined,
    PublicOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutline

} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";

const sidebar = ({
    drawerWidth,
    isSidebarOpen,
    setIssidebarOpen,
    IsNonMobile

}) => {
    const { pathname } = useLocation();
    const [active, setActive] = useState("");
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(() => {
        setActive(pathname.substring(1))
    }, [pathname])
    return <Box component="nav">

    </Box>

}

export default sidebar