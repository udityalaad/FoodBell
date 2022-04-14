import { Hidden } from "@mui/material";
import Grid from "@mui/material/Grid";
function SideImage() {
  return (
    <Hidden mdDown>
      <Grid
        item container
        md={6}
        sx={{
          backgroundImage:
            "url(https://sarbatfoods.ca/wp-content/uploads/2021/01/sarbat_food_best-_tiffin_service.jpg)",
          /* backgroundImage:'url(${"../src/images/foodBellLogo.jpg"})',*/
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          // backgroundPosition: "center",
        }}
      />
    </Hidden>
  );
}

export default SideImage;
