const articles = [
    {
        id: 1,
        title: "'The Walking Dead' Actor Dies: Scott Wilson Passes Away At 76",
        image: "https://pmctvline2.files.wordpress.com/2018/10/scott-wilson.jpg?w=614",
        desc: "Hershel's death on the show is remembered one of the most shocking and heart-breaking for TV viewers.",
        author: "Marissa Charles",
        url: "https://hollywoodlife.com/2018/10/06/walking-dead-actor-dies-scott-wilson-passes-away-76/",
        comment: ""
    },
    {
        id: 2,
        title: "FC 229 results -- Khabib vs. McGregor: Live updates, fight card, start time, highlights",
        image: "https://sportshub.cbsistatic.com/i/r/2018/10/06/61df4d6f-a37d-4e01-b4b5-1fc11e749fe2/thumbnail/770x433/d43dbb50537ed5afcc2ea0e5e2396739/khabib-mcgregor-dana-opening-presser.jpg",
        desc: "Follow along live as the pair of top lightweights in MMA collide in Las Vegas with legacy on the line",
        author: "Brian Campbell",
        url: "https://www.cbssports.com/mma/news/ufc-229-results-khabib-vs-mcgregor-live-updates-fight-card-start-time-highlights/",
        comment: ""

    },
    {
        id: 3,
        title: "Report: Wellington's Ahmmon Richards' football career over because of neck injury",
        image: "https://www.palmbeachpost.com/rf/image_large/Pub/p9/PalmBeachPost/2018/10/06/Images/GettyImages-875818380.jpg",
        desc: "A disabling neck injury has ended the football career of Wellington’s Ahmmon Richards, accordi...",
        author: "Tom D'Angelo",
        url: "https://www.palmbeachpost.com/sports/report-wellington-ahmmon-richards-football-career-over-because-neck-injury/YT3HRJitGP5zCp4fRouJXN/",
        comment: ""

    },
    {
        id: 4,
        title: "Central American storm may become tropical depression in coming days, hurricane center says",
        image: "https://cdn.cnn.com/cnnnext/dam/assets/181006203619-potential-tropical-cyclone-14-super-tease.jpg",
        desc: "A tropical storm watch is in effect for the coast of Mexico from Tulum to Cabo Catoche.",
        author: "Amir Vera",
        url: "https://www.cnn.com/2018/10/06/weather/potential-tropical-cyclone-14-wxc/index.html",
        comment: ""

    },
    {
        id: 5,
        title: "Trickery, defense help Florida edge No. 6 LSU 27-19",
        image:
        "https://www.gannett-cdn.com/-mm-/a326948d2bee310678d89b67a5fa4a32433b1c19/c=0-397-3300-2253/local/-/media/2018/10/06/USATODAY/usatsports/2a8ae2726fb7473ea30e6d64b16883db.jpg?width=3200&height=1680&fit=crop",
        desc: "Lucas Krull grew up idolizing Tim Tebow, a left-handed quarterback big enough to play tight end, and looked a lot like him on a trick play that helped No. 22 Florida beat fifth-ranked LSU 27-19.",
        author: "AP",
        url: "https://www.usatoday.com/story/sports/ncaaf/2018/10/06/trickery-defense-help-no-22-florida-edge-no-5-lsu-27-19/38076007/",
        comment: ""

    },
    {
        id: 6,
        title: "Kavanaugh Is Sworn In After Close Confirmation Vote in Senate",
        image: "https://static01.nyt.com/images/2018/09/07/us/politics/07dc-kavanaugh-promo/07dc-confidential-facebookJumbo.jpg",
        desc: "His elevation locked in a solid conservative majority on the Supreme Court and capped a rancorous battle.",
        author: "Sheryl Gay Stolberg",
        url: "https://www.nytimes.com/2018/10/06/us/politics/brett-kavanaugh-supreme-court.html",
        comment: ""

    }]; 
let readLater = [];
let id = 0;
let idd = 0;

module.exports = {
  displayArticle: (req,res) => {
       res.status(200).json(articles)
        },
    addComment: (req,res) => {
        const articleId = req.params.id;
        console.log(req.body)
        console.log(req.params.id)
        const indexOfArticle = articles.findIndex(article => article.id === parseInt(articleId));
            if(indexOfArticle === -1){
                res.status(404).send(`Article with ID ${id} does not exist`)
            } else {
                console.log('index', indexOfArticle)
                console.log('body', req.body)
                articles[indexOfArticle].comment = req.body.comment
                res.json(articles);
            }
           
      
        //console.log(articles[i].comment)
        // if (indexOfArticle === -1){
        //     res.status(404).send(`${articleId} doesnt exist`)
        // } else {
        //     articles[indexOfArticle] = {...req.body, id: articles[indexOfArticle].id }
        //     res.json(articles);
        // }
    },
    deleteMessage: (req,res) => {
        let {id} = req.params;
        //const articlesId = req.params.id;
        const indexOfArticles = readLater.findIndex(article => article.id === +id);
        if (indexOfArticles === -1){
            res.status(404).send(`${id} doesnt exist`)
        } else {
            readLater.splice(indexOfArticles, 1);
            res.json(readLater)
        }
    },
    addToRead: (req,res) => {
        console.log(req.body)
        idd++;
        let { title } = req.body;
        let laterArt = {
            title: title,
            id:idd
        }
        readLater.push(laterArt);
        console.log(readLater)
        res.status(200).send(readLater)
    },
    getReadLater: (req,res) => {
        res.status(200).send(readLater)
    }
 }