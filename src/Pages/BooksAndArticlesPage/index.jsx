import HeroSection from "../../Components/HeroSection/HeroSection";
import ArticlesCard from "../../Components/BooksAndArticles/ArticlesCard";
import BooksCard from "../../Components/BooksAndArticles/BooksCard";
import { Box, Select, MenuItem, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Loading from "../../Components/Loading";
import axios from "../../API/axios";
import React, { useState } from "react";
function BooksAndArticlesPage() {
  const HeaderContainer = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "2rem",
    marginTop: "3rem",
    marginBottom: "3rem",
    fontFamily: "var(--font-family_2)",
  }));

  const [category, setCategory] = useState("articles");
  const [books, setBooks] = useState(null);
  const [articles, setArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const admin = JSON.parse(localStorage.getItem("admin"));
  const token = admin.token;

  const fetchBooks = async () => {
    setIsLoading(true);
    const { data } = await axios.get("/books", {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    setBooks(data.items);
    setIsLoading(false);
  };

  const fetchArticles = async () => {
    setIsLoading(true);
    const { data } = await axios.get("/articles", {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    setArticles(data.items);
    setIsLoading(false);
  };

  React.useEffect(() => {
    if (category === "books") {
      fetchBooks();
    } else {
      fetchArticles();
    }
    // document
    //   .getElementById("books-and-articles-header")
    //   .scrollIntoView({ behavior: "smooth" });
  }, [category]);

  React.useEffect(() => {
    document
      .getElementById("reusable-hero-section")
      .scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <>
      <HeroSection url={"./books.jpg"} title={"Find articles and books"} />
      {isLoading ? (
        <Loading />
      ) : (
        <Box
          sx={{
            marginTop: "1rem",
            padding: "2rem",
          }}
        >
          <HeaderContainer>
            <Typography variant="h4" id="books-and-articles-header">
              {/* Books and Articles */}
            </Typography>
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
              {articles?.map((article) => (
                <Grid item sx={4}>
                  <ArticlesCard data={article} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {books?.map((book) => (
                <Grid item sx={3}>
                  <BooksCard data={book} />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      )}
    </>
  );
}

export default BooksAndArticlesPage;
