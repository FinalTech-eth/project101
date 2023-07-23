import HeroSection from "../../Components/HeroSection/HeroSection";
import ArticlesCard from "../../Components/BooksAndArticles/ArticlesCard";
import BooksCard from "../../Components/BooksAndArticles/BooksCard";
import { Box, Select, MenuItem, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
function BooksAndArticlesPage() {
  const temp = [1, 2, 3, 4, 5];
  const [category, setCategory] = useState("articles");

  const HeaderContainer = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "2rem",
    marginTop: "3rem",
    marginBottom: "3rem",
    fontFamily: "var(--font-family_2)",
  }));

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  React.useEffect(() => {
    document
      .getElementById("reusable-hero-section")
      .scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <HeroSection
        url={"https://mui.com/static/images/cards/paella.jpg"}
        title={"This is the title for the books and articles page"}
      />
      <Box
        sx={{
          marginTop: "1rem",
          padding: "2rem",
        }}
      >
        <HeaderContainer>
          <Typography variant="h4">Books and Articles</Typography>
          <Select
            value={category}
            onChange={handleCategoryChange}
            displayEmpty
            inputProps={{ "aria-label": "books and articles" }}
          >
            <MenuItem value="articles">Articles</MenuItem>
            <MenuItem value="books">Books</MenuItem>
          </Select>
        </HeaderContainer>
        {category === "articles" ? (
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {temp.map(() => (
              <Grid item sx={3}>
                <ArticlesCard data="data" />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {temp.map(() => (
              <Grid item sx={3}>
                <BooksCard data="data" />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
}

export default BooksAndArticlesPage;
