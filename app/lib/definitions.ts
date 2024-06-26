export type SimpleNav = {
    Url: string;
    Id: string;
    Title: string;
    TemplateName: string;
};

export type Component = {
    Id: string;
    ComponentName: string;
    Title: string;
    PH: string;
    DS: string;
    UID: string;
    PAR: string;
    PAFTER: string;
    Fields: any;
    CustomViewModel: any;
};
export type ArticleProps = {
    knowledgebasearticletitle: string;
    knowledgebasearticledescription: string;
    knowledgebasearticlecontent: string;
    knowledgebaseArticleDescriptionOutput: string;
    pagebreadcrumbtext: string;
};
export type RenderingModel = {
    PageItem: PageItem;
    Component: Component;
};
export type PageItem = {
    Name: string;
    DisplayName: string;
    ItemId: string;
    TemplateName: string;
    TemplateID: string;
    Path: string;
    Parents: SimpleNav[];
    Children: SimpleNav[];
    Siblings: SimpleNav[];
    Fields: any;
};
export type NewsItem = {
    ArticleId: string;
    Title: string;
    ImageUrl: string;
    ThumbnailImageUrl: string;
    ImageAlt: string;
    Excerpt: string;
    PublishedDate: string;
    LinkToPage: string;
    Categories: string;
    ThumbnailImageUrlWithBinding: string;
    LastUpdatedDate: string;
    Body: string;
};
export type CaseItem = {
    CaseId: string;
    RootCaseId: string;
    EnquiryNumber: string;
    SupportType: string;
    Status: string;
    Created: string;
    Updated: string;
    CommentCount: string;
    CommentText: string;
    AttachmentCount: string;
    AttachmentText: string;
    State: string;
    Converted: string;
    ShowCancel: string;
    PendingCancelMessage: string;
};