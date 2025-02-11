import { Box} from '@mui/material';
import { ImgHTMLAttributes } from 'react';

// interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
//   sx?: SxProps;
// }

const Image = ({ sx, ...rest }) => {
  return <Box component="img" sx={sx} {...rest} />;
};

export default Image;
