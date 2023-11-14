import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Tooltip} from '@mui/material';

const CustomTextTooltip = ({title, icon = null, placement, children}) => {
    const buildLabel = () => {
        if (icon) {
            return (
                <>
                    <FontAwesomeIcon icon={icon}/> {title}
                </>
            );
        }
        return title;
    };

    return (
        <Tooltip title={buildLabel()} placement={"left-end"}>
            <span>
                {children}
            </span>
        </Tooltip>
    );
};

export default CustomTextTooltip;
