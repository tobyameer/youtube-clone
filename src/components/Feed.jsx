import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { SideBar, Videos } from "./";
import { FetchFromApi } from "../utils/FetchFromApi";

const Feed = () => {
  const [selectedCatgeory, setSelectedCatgeory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    FetchFromApi(`search?part=snippet&q=${selectedCatgeory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCatgeory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCatgeory={selectedCatgeory}
          setSelectedCatgeory={setSelectedCatgeory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright © 2022 JSM Media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCatgeory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
