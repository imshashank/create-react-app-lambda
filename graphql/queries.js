/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getArticles = /* GraphQL */ `
  query GetArticles($ArticleId: String!) {
    getArticles(ArticleId: $ArticleId) {
      ArticleId
      PublishedAt
      SourceId
      Title
      Authors
      AuthorUrl
      Description
      Language
      Url
      UrlToImage
      MainImage
      Content
      RssContent
      Sentiment
      Text
      Category
      Categories
      Tags
      Keywords
      Summary
      Images
      SourceName
      IsAmp
      AmpUrl
      ReadCount
      LikeCount
      BookmarkCount
      FeedId
      FeedSource
      Reads
      Like
      Bookmark
      PluginName
    }
  }
`;
export const listArticles = /* GraphQL */ `
  query ListArticles(
    $filter: TableArticlesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        ArticleId
        PublishedAt
        SourceId
        Title
        Authors
        AuthorUrl
        Description
        Language
        Url
        UrlToImage
        MainImage
        Content
        RssContent
        Sentiment
        Text
        Category
        Categories
        Tags
        Keywords
        Summary
        Images
        SourceName
        IsAmp
        AmpUrl
        ReadCount
        LikeCount
        BookmarkCount
        FeedId
        FeedSource
        Reads
        Like
        Bookmark
        PluginName
      }
      nextToken
    }
  }
`;
export const queryArticlesBySourceIdPublishedAtIndex = /* GraphQL */ `
  query QueryArticlesBySourceIdPublishedAtIndex(
    $SourceId: String!
    $first: Int
    $after: String
  ) {
    queryArticlesBySourceIdPublishedAtIndex(
      SourceId: $SourceId
      first: $first
      after: $after
    ) {
      items {
        ArticleId
        PublishedAt
        SourceId
        Title
        Authors
        AuthorUrl
        Description
        Language
        Url
        UrlToImage
        MainImage
        Content
        RssContent
        Sentiment
        Text
        Category
        Categories
        Tags
        Keywords
        Summary
        Images
        SourceName
        IsAmp
        AmpUrl
        ReadCount
        LikeCount
        BookmarkCount
        FeedId
        FeedSource
        Reads
        Like
        Bookmark
        PluginName
      }
      nextToken
    }
  }
`;
export const getFeedDao = /* GraphQL */ `
  query GetFeedDao($ArticleId: String!, $CreationTime: String!) {
    getFeedDao(ArticleId: $ArticleId, CreationTime: $CreationTime) {
      CreationTime
      FeedId
      UserId
      ArticleId
      FeedSource
      Reads
      Like
      Bookmark
    }
  }
`;
export const listFeedDaos = /* GraphQL */ `
  query ListFeedDaos(
    $filter: TableFeedDaoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeedDaos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        CreationTime
        FeedId
        UserId
        ArticleId
        FeedSource
        Reads
        Like
        Bookmark
      }
      nextToken
    }
  }
`;
export const queryFeedDaosByUserIdCreationTimeIndex = /* GraphQL */ `
  query QueryFeedDaosByUserIdCreationTimeIndex(
    $UserId: String!
    $first: Int
    $after: String
  ) {
    queryFeedDaosByUserIdCreationTimeIndex(
      UserId: $UserId
      first: $first
      after: $after
    ) {
      items {
        CreationTime
        FeedId
        UserId
        ArticleId
        FeedSource
        Reads
        Like
        Bookmark
      }
      nextToken
    }
  }
`;
export const getFollowing = /* GraphQL */ `
  query GetFollowing($FollowingId: String!, $CreationTime: String!) {
    getFollowing(FollowingId: $FollowingId, CreationTime: $CreationTime) {
      FollowingId
      CreationTime
      SourceId
      UserId
      Following
    }
  }
`;
export const listFollowings = /* GraphQL */ `
  query ListFollowings(
    $filter: TableFollowingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        FollowingId
        CreationTime
        SourceId
        UserId
        Following
      }
      nextToken
    }
  }
`;
export const queryFollowingsBySourceIdCreationTimeIndex = /* GraphQL */ `
  query QueryFollowingsBySourceIdCreationTimeIndex(
    $SourceId: String!
    $first: Int
    $after: String
  ) {
    queryFollowingsBySourceIdCreationTimeIndex(
      SourceId: $SourceId
      first: $first
      after: $after
    ) {
      items {
        FollowingId
        CreationTime
        SourceId
        UserId
        Following
      }
      nextToken
    }
  }
`;
export const queryFollowingsByUserIdCreationTimeIndex = /* GraphQL */ `
  query QueryFollowingsByUserIdCreationTimeIndex(
    $UserId: String!
    $first: Int
    $after: String
  ) {
    queryFollowingsByUserIdCreationTimeIndex(
      UserId: $UserId
      first: $first
      after: $after
    ) {
      items {
        FollowingId
        CreationTime
        SourceId
        UserId
        Following
      }
      nextToken
    }
  }
`;
export const getSources = /* GraphQL */ `
  query GetSources($SourceId: String!) {
    getSources(SourceId: $SourceId) {
      SourceId
      Name
      Description
      Url
      FaviconUrl
      LogoUrl
      RssUrl
      Category
      Tags
      Keywords
      Language
      Country
      FollowerCount
      CreatedAt
      following {
        FollowingId
        CreationTime
        SourceId
        UserId
        Following
      }
      articles {
        nextToken
      }
    }
  }
`;
export const listSources = /* GraphQL */ `
  query ListSources(
    $filter: TableSourcesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSources(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        SourceId
        Name
        Description
        Url
        FaviconUrl
        LogoUrl
        RssUrl
        Category
        Tags
        Keywords
        Language
        Country
        FollowerCount
        CreatedAt
      }
      nextToken
    }
  }
`;
export const listSourcesByCategory = /* GraphQL */ `
  query ListSourcesByCategory(
    $category: String
    $limit: Int
    $nextToken: String
  ) {
    listSourcesByCategory(
      category: $category
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        SourceId
        Name
        Description
        Url
        FaviconUrl
        LogoUrl
        RssUrl
        Category
        Tags
        Keywords
        Language
        Country
        FollowerCount
        CreatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser {
    getUser {
      UserId
      DisplayName
      UserName
      FirstName
      MiddleName
      LastName
      Countries
      Languages
      Profession
      Industry
      Education
      DOB
      Gender
      Interests
      Email
      AppTypeList
      UserImageUrl
      LastLogin
      CreationTime
      UserLoginProvider
      RegistrationIds
      PaymentDate
      SubscriptionPeriod
      IsSubscribed
      version
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($UserId: String) {
    getUsers(UserId: $UserId) {
      UserId
      feed {
        nextToken
      }
    }
  }
`;
export const getUserWithFollowing = /* GraphQL */ `
  query GetUserWithFollowing($UserId: String!) {
    getUserWithFollowing(UserId: $UserId) {
      UserId
      feed {
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: TableUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        UserId
      }
      nextToken
    }
  }
`;
export const getRatings = /* GraphQL */ `
  query GetRatings($ArticleId: String!) {
    getRatings(ArticleId: $ArticleId) {
      RatingId
      ArticleId
      UserId
      Rating
      CreatedAt
    }
  }
`;
export const listRatings = /* GraphQL */ `
  query ListRatings(
    $filter: TableRatingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        RatingId
        ArticleId
        UserId
        Rating
        CreatedAt
      }
      nextToken
    }
  }
`;
export const getComments = /* GraphQL */ `
  query GetComments($ArticleId: String!, $limit: Int, $nextToken: String) {
    getComments(ArticleId: $ArticleId, limit: $limit, nextToken: $nextToken) {
      items {
        ArticleId
        CreatedAt
        PublishedAt
        UserId
        UserName
        Comment
        UserImageUrl
      }
      nextToken
    }
  }
`;
export const getCommentsByArticleId = /* GraphQL */ `
  query GetCommentsByArticleId(
    $ArticleId: String!
    $limit: Int
    $nextToken: String
  ) {
    getCommentsByArticleId(
      ArticleId: $ArticleId
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        ArticleId
        CreatedAt
        PublishedAt
        UserId
        UserName
        Comment
        UserImageUrl
      }
      nextToken
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments($ArticleId: String!, $limit: Int, $nextToken: String) {
    listComments(ArticleId: $ArticleId, limit: $limit, nextToken: $nextToken) {
      items {
        ArticleId
        CreatedAt
        PublishedAt
        UserId
        UserName
        Comment
        UserImageUrl
      }
      nextToken
    }
  }
`;
export const getBookmarks = /* GraphQL */ `
  query GetBookmarks($BookmarkId: String!) {
    getBookmarks(BookmarkId: $BookmarkId) {
      BookmarkId
      CreatedAt
      PublishedAt
      UserId
      ArticleId
      PluginName
      Status
      BookmarkUrl
    }
  }
`;
export const listBookmarks = /* GraphQL */ `
  query ListBookmarks(
    $filter: TableBookmarksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookmarks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        ArticleId
        PublishedAt
        SourceId
        Title
        Authors
        AuthorUrl
        Description
        Language
        Url
        UrlToImage
        MainImage
        Content
        RssContent
        Sentiment
        Text
        Category
        Categories
        Tags
        Keywords
        Summary
        Images
        SourceName
        IsAmp
        AmpUrl
        ReadCount
        LikeCount
        BookmarkCount
        FeedId
        FeedSource
        Reads
        Like
        Bookmark
        PluginName
      }
      nextToken
    }
  }
`;
export const getBookmarksByUserId = /* GraphQL */ `
  query GetBookmarksByUserId($limit: Int, $nextToken: String) {
    getBookmarksByUserId(limit: $limit, nextToken: $nextToken) {
      items {
        ArticleId
        PublishedAt
        SourceId
        Title
        Authors
        AuthorUrl
        Description
        Language
        Url
        UrlToImage
        MainImage
        Content
        RssContent
        Sentiment
        Text
        Category
        Categories
        Tags
        Keywords
        Summary
        Images
        SourceName
        IsAmp
        AmpUrl
        ReadCount
        LikeCount
        BookmarkCount
        FeedId
        FeedSource
        Reads
        Like
        Bookmark
        PluginName
      }
      nextToken
    }
  }
`;
export const getReadsByUserId = /* GraphQL */ `
  query GetReadsByUserId($limit: Int, $nextToken: String) {
    getReadsByUserId(limit: $limit, nextToken: $nextToken) {
      items {
        ArticleId
        PublishedAt
        SourceId
        Title
        Authors
        AuthorUrl
        Description
        Language
        Url
        UrlToImage
        MainImage
        Content
        RssContent
        Sentiment
        Text
        Category
        Categories
        Tags
        Keywords
        Summary
        Images
        SourceName
        IsAmp
        AmpUrl
        ReadCount
        LikeCount
        BookmarkCount
        FeedId
        FeedSource
        Reads
        Like
        Bookmark
        PluginName
      }
      nextToken
    }
  }
`;
export const getNotificationsByUserId = /* GraphQL */ `
  query GetNotificationsByUserId($limit: Int, $nextToken: String) {
    getNotificationsByUserId(limit: $limit, nextToken: $nextToken) {
      items {
        ArticleId
        PublishedAt
        SourceId
        Title
        Authors
        AuthorUrl
        Description
        Language
        Url
        UrlToImage
        MainImage
        Content
        RssContent
        Sentiment
        Text
        Category
        Categories
        Tags
        Keywords
        Summary
        Images
        SourceName
        IsAmp
        AmpUrl
        ReadCount
        LikeCount
        BookmarkCount
        FeedId
        FeedSource
        Reads
        Like
        Bookmark
        PluginName
      }
      nextToken
    }
  }
`;
export const getLikesByUserId = /* GraphQL */ `
  query GetLikesByUserId($limit: Int, $nextToken: String) {
    getLikesByUserId(limit: $limit, nextToken: $nextToken) {
      items {
        ArticleId
        PublishedAt
        SourceId
        Title
        Authors
        AuthorUrl
        Description
        Language
        Url
        UrlToImage
        MainImage
        Content
        RssContent
        Sentiment
        Text
        Category
        Categories
        Tags
        Keywords
        Summary
        Images
        SourceName
        IsAmp
        AmpUrl
        ReadCount
        LikeCount
        BookmarkCount
        FeedId
        FeedSource
        Reads
        Like
        Bookmark
        PluginName
      }
      nextToken
    }
  }
`;
export const getSourcesByUserId = /* GraphQL */ `
  query GetSourcesByUserId($limit: Int, $nextToken: String) {
    getSourcesByUserId(limit: $limit, nextToken: $nextToken) {
      items {
        SourceId
        Name
        Description
        Url
        FaviconUrl
        LogoUrl
        RssUrl
        Category
        Tags
        Keywords
        Language
        Country
        FollowerCount
        CreatedAt
      }
      nextToken
    }
  }
`;
export const addUrl = /* GraphQL */ `
  query AddUrl(
    $requestType: String
    $inputStr: String
    $limit: Int
    $nextToken: String
  ) {
    addUrl(
      requestType: $requestType
      inputStr: $inputStr
      limit: $limit
      nextToken: $nextToken
    ) {
      BookmarkId
      CreatedAt
      PublishedAt
      UserId
      ArticleId
      PluginName
      Status
      BookmarkUrl
    }
  }
`;
export const listSourcesV2 = /* GraphQL */ `
  query ListSourcesV2(
    $requestType: String
    $inputStr: String
    $limit: Int
    $appType: String
    $nextToken: String
  ) {
    listSourcesV2(
      requestType: $requestType
      inputStr: $inputStr
      limit: $limit
      appType: $appType
      nextToken: $nextToken
    ) {
      items {
        SourceId
        Name
        Description
        Url
        FaviconUrl
        LogoUrl
        RssUrl
        Category
        Tags
        Keywords
        Language
        Country
        FollowerCount
        CreatedAt
      }
      nextToken
    }
  }
`;
export const getFeedV2 = /* GraphQL */ `
  query GetFeedV2(
    $requestType: String
    $inputStr: String
    $limit: Int
    $nextToken: String
  ) {
    getFeedV2(
      requestType: $requestType
      inputStr: $inputStr
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        ArticleId
        PublishedAt
        SourceId
        Title
        Authors
        AuthorUrl
        Description
        Language
        Url
        UrlToImage
        MainImage
        Content
        RssContent
        Sentiment
        Text
        Category
        Categories
        Tags
        Keywords
        Summary
        Images
        SourceName
        IsAmp
        AmpUrl
        ReadCount
        LikeCount
        BookmarkCount
        FeedId
        FeedSource
        Reads
        Like
        Bookmark
        PluginName
      }
      nextToken
    }
  }
`;
export const getArticlesV2 = /* GraphQL */ `
  query GetArticlesV2(
    $requestType: String
    $inputStr: String
    $appType: String
    $limit: Int
    $nextToken: String
  ) {
    getArticlesV2(
      requestType: $requestType
      inputStr: $inputStr
      appType: $appType
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        ArticleId
        PublishedAt
        SourceId
        Title
        Authors
        AuthorUrl
        Description
        Language
        Url
        UrlToImage
        MainImage
        Content
        RssContent
        Sentiment
        Text
        Category
        Categories
        Tags
        Keywords
        Summary
        Images
        SourceName
        IsAmp
        AmpUrl
        ReadCount
        LikeCount
        BookmarkCount
        FeedId
        FeedSource
        Reads
        Like
        Bookmark
        PluginName
      }
      nextToken
    }
  }
`;
export const getFeed = /* GraphQL */ `
  query GetFeed(
    $requestType: String
    $appType: String
    $inputStr: String
    $limit: Int
    $nextToken: String
  ) {
    getFeed(
      requestType: $requestType
      appType: $appType
      inputStr: $inputStr
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        ArticleId
        PublishedAt
        SourceId
        Title
        Authors
        AuthorUrl
        Description
        Language
        Url
        UrlToImage
        MainImage
        Content
        RssContent
        Sentiment
        Text
        Category
        Categories
        Tags
        Keywords
        Summary
        Images
        SourceName
        IsAmp
        AmpUrl
        ReadCount
        LikeCount
        BookmarkCount
        FeedId
        FeedSource
        Reads
        Like
        Bookmark
        PluginName
      }
      nextToken
    }
  }
`;
export const getTopics = /* GraphQL */ `
  query GetTopics(
    $requestType: String
    $inputStr: String
    $limit: Int
    $nextToken: String
  ) {
    getTopics(
      requestType: $requestType
      inputStr: $inputStr
      limit: $limit
      nextToken: $nextToken
    )
  }
`;
export const getTopSources = /* GraphQL */ `
  query GetTopSources(
    $requestType: String
    $inputStr: String
    $limit: Int
    $nextToken: String
  ) {
    getTopSources(
      requestType: $requestType
      inputStr: $inputStr
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        SourceId
        Name
        Description
        Url
        FaviconUrl
        LogoUrl
        RssUrl
        Category
        Tags
        Keywords
        Language
        Country
        FollowerCount
        CreatedAt
      }
      nextToken
    }
  }
`;
export const getImpressions = /* GraphQL */ `
  query GetImpressions($ImpressionId: String!) {
    getImpressions(ImpressionId: $ImpressionId) {
      ImpressionId
      ArticleId
      CreatedAt
      PublishedAt
      UserId
      PluginName
    }
  }
`;
export const listImpressions = /* GraphQL */ `
  query ListImpressions(
    $filter: TableImpressionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImpressions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        ImpressionId
        ArticleId
        CreatedAt
        PublishedAt
        UserId
        PluginName
      }
      nextToken
    }
  }
`;
export const getLikes = /* GraphQL */ `
  query GetLikes($LikeId: String!) {
    getLikes(LikeId: $LikeId) {
      LikeId
      PublishedAt
      CreatedAt
      UserId
      ArticleId
      PluginName
      Value
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: TableLikesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        LikeId
        PublishedAt
        CreatedAt
        UserId
        ArticleId
        PluginName
        Value
      }
      nextToken
    }
  }
`;
export const queryLikesByUserIdCreatedAtIndex = /* GraphQL */ `
  query QueryLikesByUserIdCreatedAtIndex(
    $UserId: String!
    $first: Int
    $after: String
  ) {
    queryLikesByUserIdCreatedAtIndex(
      UserId: $UserId
      first: $first
      after: $after
    ) {
      items {
        LikeId
        PublishedAt
        CreatedAt
        UserId
        ArticleId
        PluginName
        Value
      }
      nextToken
    }
  }
`;
export const getReads = /* GraphQL */ `
  query GetReads($ReadId: String!, $CreatedAt: String!) {
    getReads(ReadId: $ReadId, CreatedAt: $CreatedAt) {
      CreatedAt
      ReadId
      UserId
      PublishedAt
      ArticleId
      PluginName
    }
  }
`;
export const listReads = /* GraphQL */ `
  query ListReads(
    $filter: TableReadsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReads(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        CreatedAt
        ReadId
        UserId
        PublishedAt
        ArticleId
        PluginName
      }
      nextToken
    }
  }
`;
export const queryReadsByUserIdCreatedAtIndex = /* GraphQL */ `
  query QueryReadsByUserIdCreatedAtIndex(
    $UserId: String!
    $first: Int
    $after: String
  ) {
    queryReadsByUserIdCreatedAtIndex(
      UserId: $UserId
      first: $first
      after: $after
    ) {
      items {
        CreatedAt
        ReadId
        UserId
        PublishedAt
        ArticleId
        PluginName
      }
      nextToken
    }
  }
`;
export const getNotifications = /* GraphQL */ `
  query GetNotifications($NotificationId: String!) {
    getNotifications(NotificationId: $NotificationId) {
      NotificationId
      ArticleId
      CreatedAt
      NotificationType
      PublishedAt
      SourceId
      SourceName
      Title
      UrlToImage
      UserId
    }
  }
`;
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: TableNotificationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        NotificationId
        ArticleId
        CreatedAt
        NotificationType
        PublishedAt
        SourceId
        SourceName
        Title
        UrlToImage
        UserId
      }
      nextToken
    }
  }
`;
export const queryNotificationsByUserIdCreatedAtIndex = /* GraphQL */ `
  query QueryNotificationsByUserIdCreatedAtIndex(
    $UserId: String!
    $first: Int
    $after: String
  ) {
    queryNotificationsByUserIdCreatedAtIndex(
      UserId: $UserId
      first: $first
      after: $after
    ) {
      items {
        NotificationId
        ArticleId
        CreatedAt
        NotificationType
        PublishedAt
        SourceId
        SourceName
        Title
        UrlToImage
        UserId
      }
      nextToken
    }
  }
`;
