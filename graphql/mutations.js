/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFeedDao = /* GraphQL */ `
  mutation CreateFeedDao($input: CreateFeedDaoInput!) {
    createFeedDao(input: $input) {
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
export const updateFeedDao = /* GraphQL */ `
  mutation UpdateFeedDao($input: UpdateFeedDaoInput!) {
    updateFeedDao(input: $input) {
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
export const deleteFeedDao = /* GraphQL */ `
  mutation DeleteFeedDao($input: DeleteFeedDaoInput!) {
    deleteFeedDao(input: $input) {
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
export const createFollowing = /* GraphQL */ `
  mutation CreateFollowing($input: CreateFollowingInput!) {
    createFollowing(input: $input) {
      FollowingId
      CreationTime
      SourceId
      UserId
      Following
    }
  }
`;
export const updateFollowing = /* GraphQL */ `
  mutation UpdateFollowing($input: UpdateFollowingInput!) {
    updateFollowing(input: $input) {
      FollowingId
      CreationTime
      SourceId
      UserId
      Following
    }
  }
`;
export const deleteFollowing = /* GraphQL */ `
  mutation DeleteFollowing($input: DeleteFollowingInput!) {
    deleteFollowing(input: $input) {
      FollowingId
      CreationTime
      SourceId
      UserId
      Following
    }
  }
`;
export const createSources = /* GraphQL */ `
  mutation CreateSources($input: CreateSourcesInput!) {
    createSources(input: $input) {
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
export const updateSources = /* GraphQL */ `
  mutation UpdateSources($input: UpdateSourcesInput!) {
    updateSources(input: $input) {
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
export const deleteSources = /* GraphQL */ `
  mutation DeleteSources($input: DeleteSourcesInput!) {
    deleteSources(input: $input) {
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
export const createUsers = /* GraphQL */ `
  mutation CreateUsers($input: CreateUsersInput!) {
    createUsers(input: $input) {
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
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers($input: UpdateUsersInput!) {
    updateUsers(input: $input) {
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
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers($input: DeleteUsersInput!) {
    deleteUsers(input: $input) {
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
export const createRatings = /* GraphQL */ `
  mutation CreateRatings($input: CreateRatingsInput!) {
    createRatings(input: $input) {
      RatingId
      ArticleId
      UserId
      Rating
      CreatedAt
    }
  }
`;
export const updateRatings = /* GraphQL */ `
  mutation UpdateRatings($input: UpdateRatingsInput!) {
    updateRatings(input: $input) {
      RatingId
      ArticleId
      UserId
      Rating
      CreatedAt
    }
  }
`;
export const deleteRatings = /* GraphQL */ `
  mutation DeleteRatings($input: DeleteRatingsInput!) {
    deleteRatings(input: $input) {
      RatingId
      ArticleId
      UserId
      Rating
      CreatedAt
    }
  }
`;
export const createComments = /* GraphQL */ `
  mutation CreateComments($input: CreateCommentsInput!) {
    createComments(input: $input) {
      ArticleId
      CreatedAt
      PublishedAt
      UserId
      UserName
      Comment
      UserImageUrl
    }
  }
`;
export const updateComments = /* GraphQL */ `
  mutation UpdateComments($input: UpdateCommentsInput!) {
    updateComments(input: $input) {
      ArticleId
      CreatedAt
      PublishedAt
      UserId
      UserName
      Comment
      UserImageUrl
    }
  }
`;
export const deleteComments = /* GraphQL */ `
  mutation DeleteComments($input: DeleteCommentsInput!) {
    deleteComments(input: $input) {
      ArticleId
      CreatedAt
      PublishedAt
      UserId
      UserName
      Comment
      UserImageUrl
    }
  }
`;
export const createBookmarks = /* GraphQL */ `
  mutation CreateBookmarks($input: CreateBookmarksInput!) {
    createBookmarks(input: $input) {
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
export const updateBookmarks = /* GraphQL */ `
  mutation UpdateBookmarks($input: UpdateBookmarksInput!) {
    updateBookmarks(input: $input) {
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
export const deleteBookmarks = /* GraphQL */ `
  mutation DeleteBookmarks($input: DeleteBookmarksInput!) {
    deleteBookmarks(input: $input) {
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
export const createImpressions = /* GraphQL */ `
  mutation CreateImpressions($input: CreateImpressionsInput!) {
    createImpressions(input: $input) {
      ImpressionId
      ArticleId
      CreatedAt
      PublishedAt
      UserId
      PluginName
    }
  }
`;
export const updateImpressions = /* GraphQL */ `
  mutation UpdateImpressions($input: UpdateImpressionsInput!) {
    updateImpressions(input: $input) {
      ImpressionId
      ArticleId
      CreatedAt
      PublishedAt
      UserId
      PluginName
    }
  }
`;
export const deleteImpressions = /* GraphQL */ `
  mutation DeleteImpressions($input: DeleteImpressionsInput!) {
    deleteImpressions(input: $input) {
      ImpressionId
      ArticleId
      CreatedAt
      PublishedAt
      UserId
      PluginName
    }
  }
`;
export const createLikes = /* GraphQL */ `
  mutation CreateLikes($input: CreateLikesInput!) {
    createLikes(input: $input) {
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
export const updateLikes = /* GraphQL */ `
  mutation UpdateLikes($input: UpdateLikesInput!) {
    updateLikes(input: $input) {
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
export const deleteLikes = /* GraphQL */ `
  mutation DeleteLikes($input: DeleteLikesInput!) {
    deleteLikes(input: $input) {
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
export const createReads = /* GraphQL */ `
  mutation CreateReads($input: CreateReadsInput!) {
    createReads(input: $input) {
      CreatedAt
      ReadId
      UserId
      PublishedAt
      ArticleId
      PluginName
    }
  }
`;
export const updateReads = /* GraphQL */ `
  mutation UpdateReads($input: UpdateReadsInput!) {
    updateReads(input: $input) {
      CreatedAt
      ReadId
      UserId
      PublishedAt
      ArticleId
      PluginName
    }
  }
`;
export const deleteReads = /* GraphQL */ `
  mutation DeleteReads($input: DeleteReadsInput!) {
    deleteReads(input: $input) {
      CreatedAt
      ReadId
      UserId
      PublishedAt
      ArticleId
      PluginName
    }
  }
`;
export const createNotifications = /* GraphQL */ `
  mutation CreateNotifications($input: CreateNotificationsInput!) {
    createNotifications(input: $input) {
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
export const updateNotifications = /* GraphQL */ `
  mutation UpdateNotifications($input: UpdateNotificationsInput!) {
    updateNotifications(input: $input) {
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
export const deleteNotifications = /* GraphQL */ `
  mutation DeleteNotifications($input: DeleteNotificationsInput!) {
    deleteNotifications(input: $input) {
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
