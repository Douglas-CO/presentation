import { Grid } from "@mui/material";

import { gridSize, gridSizeMdLg1, gridSizeMdLg12 } from "@/shared/constants/ui";
import { ColorButtonType, GridSizeType } from "@/shared/interfaces";
import { SingleIconButton } from "../CustomButtons";

export type InputAndBtnGridSpaceProps = {
  inputNode: React.ReactNode;

  overrideBtnNode?: boolean;
  customBtnNode?: React.ReactNode;

  iconBtn?: React.ReactNode;
  showIconBtn?: boolean;
  btnLabel?: string;
  btnColor?: ColorButtonType;
  onClick?: () => void;
  disabledBtn?: boolean;

  //
  mainGridSize?: GridSizeType;
  inputGridSize?: GridSizeType;
  btnGridSize?: GridSizeType;
};

const InputAndBtnGridSpace: React.FC<InputAndBtnGridSpaceProps> = ({
  inputNode,
  showIconBtn = true,
  iconBtn,
  btnLabel,
  btnColor = "default",
  customBtnNode,
  overrideBtnNode,
  onClick,

  mainGridSize = gridSizeMdLg12,
  inputGridSize = showIconBtn ? gridSizeMdLg12 : gridSize,
  btnGridSize = gridSizeMdLg1,

  disabledBtn = false,
}) => {
  return (
    <>
      <Grid item container alignItems="center" spacing={1} {...mainGridSize}>
        <Grid item {...inputGridSize}>
          {inputNode}
        </Grid>

        {showIconBtn && (
          <Grid item {...btnGridSize}>
            {overrideBtnNode && customBtnNode ? (
              customBtnNode
            ) : (
              <>
                <SingleIconButton
                  startIcon={iconBtn}
                  label={btnLabel}
                  color={btnColor as any}
                  onClick={() => {
                    onClick && onClick();
                  }}
                  disabled={disabledBtn}
                />
              </>
            )}
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default InputAndBtnGridSpace;
