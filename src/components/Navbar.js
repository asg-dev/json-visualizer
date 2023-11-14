import DataObjectIcon from '@mui/icons-material/DataObject';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@mui/material';

import { COLORS } from '../utils/constants';

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: COLORS.OVERALL_THEME }}>
      <Toolbar>
        <DataObjectIcon sx={{ fontSize: 35, marginRight: 2 }} />
        <Typography component="div">
          <code>JSON Data Visualizer</code>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
