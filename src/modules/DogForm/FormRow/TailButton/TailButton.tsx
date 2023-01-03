import { FunctionComponent } from "react";
import { useAppDispatch } from "~hooks/hooks";
import { addDogSelection, removeDogSelection } from "~stores/dogs";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

type TailButtonProps = {
  id: number;
  isCoda: boolean;
};
export const TailButton: FunctionComponent<TailButtonProps> = ({ isCoda, id }) => {
  const dispatch = useAppDispatch();
  const buttonAction = isCoda ? addDogSelection() : removeDogSelection(id);

  const handleClick = () => {
    dispatch(buttonAction);
  };

  const icon = isCoda ? <AddIcon /> : <DeleteIcon />;

  return <IconButton onClick={handleClick}>{icon}</IconButton>;
};
