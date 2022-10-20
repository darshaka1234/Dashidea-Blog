import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import React, { useState } from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DateRangeIcon from "@mui/icons-material/DateRange";

const Add = () => {
  const [open, setOpen] = useState(false);

  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  });
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add"
        color="primary"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50%-25px)", md: 30 },
        }}
      >
        <Fab color="primary">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal open={open} onClose={(e) => setOpen(false)}>
        <Box
          width={400}
          height={250}
          borderRadius={4}
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Typography variant="h6" textAlign="center" color="gray">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src="./vb.jpg"
              sx={{ width: 30, height: 30, marginLeft: "10px" }}
            />
            <Typography variant="span" fontWeight={500}>
              Dash hub
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "90%", marginLeft: "20px" }}
            id="standard-multiline-static"
            multiline
            rows={2}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} ml={2} mt={1} mb={3}>
            <EmojiEmotionsIcon color="primary" />
            <AddPhotoAlternateIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button sx={{ marginLeft: "10px" }}>Post</Button>
            <Button sx={{ width: "100px", marginRight: "10px" }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
