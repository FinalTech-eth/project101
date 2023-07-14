import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import img1 from "../../Assets/Images/download (2).jpg";
import img2 from "../../Assets/Images/photo_4958761978181037040_y.jpg";

const AboutSection = () => {
  const containerStyle = {
    paddingBottom: "2rem",
  };
  const heroContainerStyle = {
    position: "relative",
    height: "70vh",
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${img2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginBottom: "2rem",
    width: "100vw",
    left: 0,
    right: 0,
  };

  const heroTextStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "#fff",
  };

  const titleStyle = {
    marginBottom: "4rem",
    fontWeight: "bold",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "1rem",
  };

  const contentStyle = {
    // marginTop: '4rem',
  };

  return (
    <Box m={0}>
      <div style={heroContainerStyle}>
        <div style={heroTextStyle}>
          <Typography variant="h3" component="h1">
            Well Come to Apostolic church of Canada/Ottawa
          </Typography>
          <Typography variant="h4" sx={{ margin: "2rem" }}>
            A place of love, faith, and community
          </Typography>
        </div>
      </div>

      <div className="page-container">
        {/* <Typography variant="h5" align="center" style={titleStyle}>
          About Us
        </Typography> */}

        <Grid container spacing={4} alignItems="center" style={containerStyle}>
          <Grid item xs={12} md={2}>
            <Typography variant="h5" style={contentStyle}>
              Salvation
            </Typography>
          </Grid>

          <Grid item xs={12} md={10}>
            <Grid container spacing={4} style={containerStyle}>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" style={contentStyle}>
                  While the word “salvation” has several meanings, in this
                  writing it is used to express the act of saving the human soul
                  from sin and its effect. The Holy Bible in:
                  <br />
                  <br />
                  Ezek.18:4 says: “…the soul that sinnth, it shall die.”
                  <br />
                  And in
                  <br />
                  <br />
                  Rom 6:23 says: “For the wages of sin is death.” In
                  <br />
                  <br />
                  Rom 3:12 it says: “They are all gone out of the way, they are
                  together become unprofitable; …” and in verses 22-23 says: “…
                  for there is no difference: for all have sinned, and come
                  short of the glory of God.” In
                  <br />
                  <br />
                  Rom 5:12 also it says: “Wherefore, as by one man sin entered
                  into the world, and death by sin; and so death passed upon all
                  men, for that all have sinned”. Thus we believe that all human
                  beings need salvation.
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="body1" style={contentStyle}>
                  The word of Lord Jesus Christ in Mat.16:26 says: “For what is
                  a man profited, if he shall gain the whole world, and lose his
                  own soul?” or what shall a man give in exchange for his soul?”
                  What we can understand from this word is the primary and
                  exceeding profit for man is the salvation of his/her soul.
                  <br />
                  <br />
                  We believe that the human soul shall be saved by knowing and
                  believing in the only God of salvation, repenting from all
                  sins, being baptized in the name of the Lord Jesus Christ for
                  the remission of sins, and receiving the gift of the Holy
                  Ghost.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={4} alignItems="center" style={containerStyle}>
          <Grid item xs={12} md={2}>
            <Typography variant="h5" style={contentStyle}>
              Believing In The Only God Of Salvation
            </Typography>
          </Grid>

          <Grid item xs={12} md={10}>
            <Grid container spacing={4} style={containerStyle}>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" style={contentStyle}>
                  By understanding from the Scriptures, we believe that the God
                  of salvation is only one. We have the following Scriptural
                  evidences:
                  <br />
                  <br />
                  Deut. 6:4; “Hear, O Israel: The Lord our God is one Lord.”
                  <br />
                  <br />
                  Isa.43:10-11; “Ye are my witnesses, saith the Lord, and my
                  servant whom I have chosen: that ye may know and believe me,
                  understand that I am he: before me there was no God formed,
                  neither shall there be after me. I, even I, am the Lord; and
                  beside me there is no savior.”
                  <br />
                  <br />
                  Isa. 45:21-22; “Tell ye, and bring them near; yea, let them
                  take counsel together: who hath declared this from ancient
                  time? Who has told it from that time? have not I the Lord? and
                  there is no God else beside me; a just God and a Savior; there
                  is none beside me. Look unto me, and be ye saved, all the ends
                  of the earth: for I am God, and there is none else.”
                  <br />
                  <br />
                  Hos. 13:4; “Yet I am the Lord thy God from the land of Egypt,
                  and thou shalt know no god but me: for there is no savior
                  beside me.”
                  <br />
                  <br />
                  We believe that the Lord Jesus Christ is that only God of
                  salvation manifest in the flesh to save us from our sins. We
                  have the following Scriptural evidences:
                  <br />
                  <br />
                  1Tim. 3:16; “And without controversy great is the mystery of
                  godliness: God was manifest in the flesh, justified in the
                  Spirit, seen of angels, preached unto the Gentiles, believed
                  on in the world, received up in to glory.”
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="body1" style={contentStyle}>
                  Mat. 1:18-23; “Now the birth of Jesus Christ was on this wise:
                  When as his mother Mary was espoused to Joseph, before they
                  came together, she was found with child of the Holy Ghost… for
                  that which is conceived in her is of the Holy Ghost. And she
                  shall bring forth a son, and thou shalt call his name JESUS:
                  for he shall save his people from their sins. Now all this was
                  done, that it might be fulfilled which was spoken of the Lord
                  by the prophet, saying, Behold, a virgin shall be with child,
                  and shall bring forth a son, and they shall call his name
                  Emmanuel, which being interpreted is, God with us.”
                  <br />
                  <br />
                  1Tim. 1:15-17; “This is a faithful saying, and worthy of all
                  acceptation, that Christ Jesus came into the world to save
                  sinners … Now unto the king eternal, immortal, invisible, the
                  only wise God, be honour and glory forever and ever, Amen.”
                  <br />
                  <br />
                  Christ Jesus that came into the world to save sinners, we
                  believe, died for our sins according to the scriptures; and
                  that he was buried, and that he rose again the third day
                  according to the scriptures. (1Cor. 15:3-4)
                  <br />
                  <br />
                  Therefore, in order to be saved, it is essential to know and
                  believe this only God of salvation.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={4} alignItems="center" style={containerStyle}>
          <Grid item xs={12} md={2}>
            <Typography variant="h5" style={contentStyle}>
              Believing In The Only God Of Salvation
            </Typography>
          </Grid>

          <Grid item xs={12} md={10}>
            <Grid container spacing={4} style={containerStyle}>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" style={contentStyle}>
                  We believe that repenting from all sins is one of the
                  essentials for salvation. Scriptural evidences for this are
                  the following among many others.
                  <br />
                  <br />
                  Luk. 13:1-5; “… And Jesus answering unto them, …I tell you,
                  nay: but, except ye repent, ye shall all likewise perish.”
                  <br /> <br />
                  Ezek. 18:30-32; “…Repent and turn your selves from all your
                  transgressions; so iniquity shall not be your ruin. Cast away
                  from you all your transgressions, whereby ye have
                  transgressed; and make you a new heart and a new spirit: for
                  why will ye die, O house of Israel? For I have no pleasure in
                  the death of him that dieth, saith the Lord God: where fore
                  turn your selves, and live ye.”
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="body1" style={contentStyle}>
                  For repentance is one of the essentials for remission of sins
                  and salvation, in Luke 24: 47 it says, “And that repentance
                  and remission of sins should be preached in his name among all
                  nations, beginning at Jerusalem.”
                  <br />
                  <br />
                  To those whose hearts be pricked and believe the gospel of
                  salvation, in Acts 2:38 it says,…Repent…”
                  <br />
                  <br />
                  Therefore, we believe that repentance is one of the essentials
                  for salvation.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={4} alignItems="center" style={containerStyle}>
          <Grid item xs={12} md={2}>
            <Typography variant="h5" style={contentStyle}>
              Baptism In The Name Of Jesus Chris
            </Typography>
          </Grid>

          <Grid item xs={12} md={10}>
            <Grid container spacing={4} style={containerStyle}>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" style={contentStyle}>
                  The word spoken by the Lord Jesus Christ to his disciples when
                  He Commissioned them to preach the gospel should get
                  attention. In Mar. 16:15-16 it says, “And he said unto them,
                  Go ye into all the world, and preach the gospel to every
                  creature. He that believeth and is baptized shall be saved;
                  but he that believeth not shall be damned.” From this message,
                  we can understand that;
                  <br />
                  <br />
                  One gospel of salvation is sent to the whole world. That same
                  gospel is to be preached to every human creature. The one who
                  believes that gospel and be baptized shall be saved. Those who
                  do not believe that gospel shall be damned. We believe that
                  baptism in the name of Jesus Christ is also one of the
                  essentials for salvation. We have got the following Scriptural
                  evidences for this.
                  <br />
                  <br />
                  Mar. 16:16 says, “…He that believeth and is baptized shall be
                  saved.” Thus we believe that faith effects with baptism as
                  well as when baptism is by faith. Faith in the gospel of Jesus
                  Christ and baptism in his name inseparably work together for
                  salvation.
                  <br />
                  <br />
                  Acts 4:12 says, “Neither is there salvation in any other: for
                  there is none other name under heaven given among men, whereby
                  we must be saved.” Again in
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="body1" style={contentStyle}>
                  Acts 2:38 it says, “…be baptized every one of you in the name
                  of Jesus Christ for the remission of sins,…”
                  <br />
                  <br />
                  1Pet. 3;20-21 says, “…when once the longsuffering of God
                  waited in the days of Noah, while the ark was a preparing,
                  where in few, that is, eight souls were saved by water. The
                  like figure whereunto even baptism doth also now save us…”
                  <br />
                  <br />
                  We believe baptism is essential for salvation for it is the
                  way by which a man be born again from water according to John
                  3:3-6; it is the operation of God in which a man be
                  circumcised by the circumcision of Christ according to Col.
                  2:11-12, and it is the way by which a man puts on Christ
                  according to Gal. 3:27.
                  <br />
                  We believe that even those who were baptized in other baptisms
                  must be baptized again in the name of Jesus Christ for
                  remission of their sins, or to be saved.
                  <br />
                  <br />
                  According to Luke 24:47; Acts 2:38; 8:4-16; 10:1-3, vs. 43-48;
                  19:1-5 and 22:16, we believe that every human creature,
                  without difference, must be baptized in the name of Jesus
                  Christ for the salvation of their souls.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={4} alignItems="center" style={containerStyle}>
          <Grid item xs={12} md={2}>
            <Typography variant="h5" style={contentStyle}>
              Receiving The Gift Of The Holy Ghost
            </Typography>
          </Grid>

          <Grid item xs={12} md={10}>
            <Grid container spacing={4} style={containerStyle}>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" style={contentStyle}>
                  The word of the Lord Jesus to Nicodemus in John 3:3-6 says,
                  “Jesus answered and said unto him, Verily, Verily I say unto
                  thee, Except a man be born again, he cannot see the kingdom of
                  God.. Verily, Verily, I say unto thee, Except a man be born of
                  water and of the Spirit, he cannot enter into the kingdom of
                  God. That which is born of the flesh is flesh; and that which
                  is born of the Spirit is spirit.”
                  <br />
                  <br />
                  From this word we can clearly understand that being born again
                  from water and the Spirit is essential for the salvation of a
                  human being.
                  <br />
                  <br />
                  In John 3:6 it says, “That which is born of the flesh is
                  flesh.” That means he/she is Adamic. The body, soul and spirit
                  of every Adamic being is sinful and lost. Thus the fallen
                  nature of everyone needs regeneration in order to be saved.
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="body1" style={contentStyle}>
                  The word of God in:
                  <br />
                  <br />
                  Tit. 3:4-5 says, “But after that the kindness and love of God
                  our Savior toward man appeared, not by work of righteousness
                  which we have done, but according to his mercy he saved us, by
                  the washing of regeneration, and renewing of the Holy Ghost.”
                  We believe, according to this word, that regeneration by
                  baptism in water (in the name of Jesus Christ) and receiving
                  the gift of the Holy Ghost are essentials for salvation.
                  <br />
                  <br />
                  We also believe that for that reason the word of God in Acts
                  2:38 says, “…Repent, and be baptized every one of you in the
                  name of Jesus Christ for the remission of sins, and ye shall
                  receive the gift of the Holy Ghost,” About Us The ACE’s
                  fundamental doctrine is rooted and anchored firmly with the
                  first New Testament Church that was born on the day of
                  Pentecost. It preaches and practices the same message of only
                  one God manifested Himself in flesh and His name is Jesus;
                  repentance, baptism in Jesus name for the remission of sins,
                  the infilling of the Holy Ghost (Acts 2:37-38) and Christians
                  live a holy life. Its Constituency is in millions and growing
                  by
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default AboutSection;
