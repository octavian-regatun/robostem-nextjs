import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";

export default function getIcon(icon: string) {
  switch (icon) {
    case "Home":
      return <HomeOutlinedIcon />;
    case "About":
      return <InfoOutlinedIcon />;
    case "Results":
      return <DoneOutlinedIcon />;
    case "Contact":
      return <PermContactCalendarOutlinedIcon />;
    case "News":
      return <LibraryBooksOutlinedIcon />;
    case "Links":
      return <LinkOutlinedIcon />;
    case "Partners":
      return <GroupOutlinedIcon />;
  }
}
