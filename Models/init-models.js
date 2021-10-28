var DataTypes = require("sequelize").DataTypes;
var _AdminAnalyticsUsageVersionLog = require("./AdminAnalyticsUsageVersionLog");
var _AdminPasswords = require("./AdminPasswords");
var _AdminSystemMessages = require("./AdminSystemMessages");
var _AdminUser = require("./AdminUser");
var _AdminUserExpiration = require("./AdminUserExpiration");
var _AdminUserSession = require("./AdminUserSession");
var _AdminnotificationInbox = require("./AdminnotificationInbox");
var _AuthorizationRole = require("./AuthorizationRole");
var _AuthorizationRule = require("./AuthorizationRule");
var _Cache = require("./Cache");
var _CacheTag = require("./CacheTag");
var _CaptchaLog = require("./CaptchaLog");
var _CatalogCategoryEntity = require("./CatalogCategoryEntity");
var _CatalogCategoryEntityDatetime = require("./CatalogCategoryEntityDatetime");
var _CatalogCategoryEntityDecimal = require("./CatalogCategoryEntityDecimal");
var _CatalogCategoryEntityInt = require("./CatalogCategoryEntityInt");
var _CatalogCategoryEntityText = require("./CatalogCategoryEntityText");
var _CatalogCategoryEntityVarchar = require("./CatalogCategoryEntityVarchar");
var _CatalogCategoryProduct = require("./CatalogCategoryProduct");
var _CatalogCategoryProductIndex = require("./CatalogCategoryProductIndex");
var _CatalogCategoryProductIndexReplica = require("./CatalogCategoryProductIndexReplica");
var _CatalogCategoryProductIndexStore1 = require("./CatalogCategoryProductIndexStore1");
var _CatalogCategoryProductIndexStore1Replica = require("./CatalogCategoryProductIndexStore1Replica");
var _CatalogCategoryProductIndexTmp = require("./CatalogCategoryProductIndexTmp");
var _CatalogCompareItem = require("./CatalogCompareItem");
var _CatalogCompareList = require("./CatalogCompareList");
var _CatalogEavAttribute = require("./CatalogEavAttribute");
var _CatalogProductBundleOption = require("./CatalogProductBundleOption");
var _CatalogProductBundleOptionValue = require("./CatalogProductBundleOptionValue");
var _CatalogProductBundlePriceIndex = require("./CatalogProductBundlePriceIndex");
var _CatalogProductBundleSelection = require("./CatalogProductBundleSelection");
var _CatalogProductBundleSelectionPrice = require("./CatalogProductBundleSelectionPrice");
var _CatalogProductBundleStockIndex = require("./CatalogProductBundleStockIndex");
var _CatalogProductEntity = require("./CatalogProductEntity");
var _CatalogProductEntityDatetime = require("./CatalogProductEntityDatetime");
var _CatalogProductEntityDecimal = require("./CatalogProductEntityDecimal");
var _CatalogProductEntityGallery = require("./CatalogProductEntityGallery");
var _CatalogProductEntityInt = require("./CatalogProductEntityInt");
var _CatalogProductEntityMediaGallery = require("./CatalogProductEntityMediaGallery");
var _CatalogProductEntityMediaGalleryValue = require("./CatalogProductEntityMediaGalleryValue");
var _CatalogProductEntityMediaGalleryValueToEntity = require("./CatalogProductEntityMediaGalleryValueToEntity");
var _CatalogProductEntityMediaGalleryValueVideo = require("./CatalogProductEntityMediaGalleryValueVideo");
var _CatalogProductEntityText = require("./CatalogProductEntityText");
var _CatalogProductEntityTierPrice = require("./CatalogProductEntityTierPrice");
var _CatalogProductEntityVarchar = require("./CatalogProductEntityVarchar");
var _CatalogProductFrontendAction = require("./CatalogProductFrontendAction");
var _CatalogProductIndexEav = require("./CatalogProductIndexEav");
var _CatalogProductIndexEavDecimal = require("./CatalogProductIndexEavDecimal");
var _CatalogProductIndexEavDecimalIdx = require("./CatalogProductIndexEavDecimalIdx");
var _CatalogProductIndexEavDecimalReplica = require("./CatalogProductIndexEavDecimalReplica");
var _CatalogProductIndexEavDecimalTmp = require("./CatalogProductIndexEavDecimalTmp");
var _CatalogProductIndexEavIdx = require("./CatalogProductIndexEavIdx");
var _CatalogProductIndexEavReplica = require("./CatalogProductIndexEavReplica");
var _CatalogProductIndexEavTmp = require("./CatalogProductIndexEavTmp");
var _CatalogProductIndexPrice = require("./CatalogProductIndexPrice");
var _CatalogProductIndexPriceBundleIdx = require("./CatalogProductIndexPriceBundleIdx");
var _CatalogProductIndexPriceBundleOptIdx = require("./CatalogProductIndexPriceBundleOptIdx");
var _CatalogProductIndexPriceBundleOptTmp = require("./CatalogProductIndexPriceBundleOptTmp");
var _CatalogProductIndexPriceBundleSelIdx = require("./CatalogProductIndexPriceBundleSelIdx");
var _CatalogProductIndexPriceBundleSelTmp = require("./CatalogProductIndexPriceBundleSelTmp");
var _CatalogProductIndexPriceBundleTmp = require("./CatalogProductIndexPriceBundleTmp");
var _CatalogProductIndexPriceCfgOptAgrIdx = require("./CatalogProductIndexPriceCfgOptAgrIdx");
var _CatalogProductIndexPriceCfgOptAgrTmp = require("./CatalogProductIndexPriceCfgOptAgrTmp");
var _CatalogProductIndexPriceCfgOptIdx = require("./CatalogProductIndexPriceCfgOptIdx");
var _CatalogProductIndexPriceCfgOptTmp = require("./CatalogProductIndexPriceCfgOptTmp");
var _CatalogProductIndexPriceDownlodIdx = require("./CatalogProductIndexPriceDownlodIdx");
var _CatalogProductIndexPriceDownlodTmp = require("./CatalogProductIndexPriceDownlodTmp");
var _CatalogProductIndexPriceFinalIdx = require("./CatalogProductIndexPriceFinalIdx");
var _CatalogProductIndexPriceFinalTmp = require("./CatalogProductIndexPriceFinalTmp");
var _CatalogProductIndexPriceIdx = require("./CatalogProductIndexPriceIdx");
var _CatalogProductIndexPriceOptAgrIdx = require("./CatalogProductIndexPriceOptAgrIdx");
var _CatalogProductIndexPriceOptAgrTmp = require("./CatalogProductIndexPriceOptAgrTmp");
var _CatalogProductIndexPriceOptIdx = require("./CatalogProductIndexPriceOptIdx");
var _CatalogProductIndexPriceOptTmp = require("./CatalogProductIndexPriceOptTmp");
var _CatalogProductIndexPriceReplica = require("./CatalogProductIndexPriceReplica");
var _CatalogProductIndexPriceTmp = require("./CatalogProductIndexPriceTmp");
var _CatalogProductIndexTierPrice = require("./CatalogProductIndexTierPrice");
var _CatalogProductIndexWebsite = require("./CatalogProductIndexWebsite");
var _CatalogProductLink = require("./CatalogProductLink");
var _CatalogProductLinkAttribute = require("./CatalogProductLinkAttribute");
var _CatalogProductLinkAttributeDecimal = require("./CatalogProductLinkAttributeDecimal");
var _CatalogProductLinkAttributeInt = require("./CatalogProductLinkAttributeInt");
var _CatalogProductLinkAttributeVarchar = require("./CatalogProductLinkAttributeVarchar");
var _CatalogProductLinkType = require("./CatalogProductLinkType");
var _CatalogProductOption = require("./CatalogProductOption");
var _CatalogProductOptionPrice = require("./CatalogProductOptionPrice");
var _CatalogProductOptionTitle = require("./CatalogProductOptionTitle");
var _CatalogProductOptionTypePrice = require("./CatalogProductOptionTypePrice");
var _CatalogProductOptionTypeTitle = require("./CatalogProductOptionTypeTitle");
var _CatalogProductOptionTypeValue = require("./CatalogProductOptionTypeValue");
var _CatalogProductRelation = require("./CatalogProductRelation");
var _CatalogProductSuperAttribute = require("./CatalogProductSuperAttribute");
var _CatalogProductSuperAttributeLabel = require("./CatalogProductSuperAttributeLabel");
var _CatalogProductSuperLink = require("./CatalogProductSuperLink");
var _CatalogProductWebsite = require("./CatalogProductWebsite");
var _CatalogUrlRewriteProductCategory = require("./CatalogUrlRewriteProductCategory");
var _CataloginventoryStock = require("./CataloginventoryStock");
var _CataloginventoryStockItem = require("./CataloginventoryStockItem");
var _CataloginventoryStockStatus = require("./CataloginventoryStockStatus");
var _CataloginventoryStockStatusIdx = require("./CataloginventoryStockStatusIdx");
var _CataloginventoryStockStatusReplica = require("./CataloginventoryStockStatusReplica");
var _CataloginventoryStockStatusTmp = require("./CataloginventoryStockStatusTmp");
var _Catalogrule = require("./Catalogrule");
var _CatalogruleCustomerGroup = require("./CatalogruleCustomerGroup");
var _CatalogruleGroupWebsite = require("./CatalogruleGroupWebsite");
var _CatalogruleGroupWebsiteReplica = require("./CatalogruleGroupWebsiteReplica");
var _CatalogruleProduct = require("./CatalogruleProduct");
var _CatalogruleProductPrice = require("./CatalogruleProductPrice");
var _CatalogruleProductPriceReplica = require("./CatalogruleProductPriceReplica");
var _CatalogruleProductReplica = require("./CatalogruleProductReplica");
var _CatalogruleWebsite = require("./CatalogruleWebsite");
var _CatalogsearchRecommendations = require("./CatalogsearchRecommendations");
var _CheckoutAgreement = require("./CheckoutAgreement");
var _CheckoutAgreementStore = require("./CheckoutAgreementStore");
var _CmsBlock = require("./CmsBlock");
var _CmsBlockStore = require("./CmsBlockStore");
var _CmsPage = require("./CmsPage");
var _CmsPageStore = require("./CmsPageStore");
var _CoreConfigData = require("./CoreConfigData");
var _CronSchedule = require("./CronSchedule");
var _CustomerAddressEntity = require("./CustomerAddressEntity");
var _CustomerAddressEntityDatetime = require("./CustomerAddressEntityDatetime");
var _CustomerAddressEntityDecimal = require("./CustomerAddressEntityDecimal");
var _CustomerAddressEntityInt = require("./CustomerAddressEntityInt");
var _CustomerAddressEntityText = require("./CustomerAddressEntityText");
var _CustomerAddressEntityVarchar = require("./CustomerAddressEntityVarchar");
var _CustomerEavAttribute = require("./CustomerEavAttribute");
var _CustomerEavAttributeWebsite = require("./CustomerEavAttributeWebsite");
var _CustomerEntity = require("./CustomerEntity");
var _CustomerEntityDatetime = require("./CustomerEntityDatetime");
var _CustomerEntityDecimal = require("./CustomerEntityDecimal");
var _CustomerEntityInt = require("./CustomerEntityInt");
var _CustomerEntityText = require("./CustomerEntityText");
var _CustomerEntityVarchar = require("./CustomerEntityVarchar");
var _CustomerFormAttribute = require("./CustomerFormAttribute");
var _CustomerGridFlat = require("./CustomerGridFlat");
var _CustomerGroup = require("./CustomerGroup");
var _CustomerLog = require("./CustomerLog");
var _CustomerVisitor = require("./CustomerVisitor");
var _DesignChange = require("./DesignChange");
var _DesignConfigGridFlat = require("./DesignConfigGridFlat");
var _DirectoryCountry = require("./DirectoryCountry");
var _DirectoryCountryFormat = require("./DirectoryCountryFormat");
var _DirectoryCountryRegion = require("./DirectoryCountryRegion");
var _DirectoryCountryRegionName = require("./DirectoryCountryRegionName");
var _DirectoryCurrencyRate = require("./DirectoryCurrencyRate");
var _DownloadableLink = require("./DownloadableLink");
var _DownloadableLinkPrice = require("./DownloadableLinkPrice");
var _DownloadableLinkPurchased = require("./DownloadableLinkPurchased");
var _DownloadableLinkPurchasedItem = require("./DownloadableLinkPurchasedItem");
var _DownloadableLinkTitle = require("./DownloadableLinkTitle");
var _DownloadableSample = require("./DownloadableSample");
var _DownloadableSampleTitle = require("./DownloadableSampleTitle");
var _EavAttribute = require("./EavAttribute");
var _EavAttributeGroup = require("./EavAttributeGroup");
var _EavAttributeLabel = require("./EavAttributeLabel");
var _EavAttributeOption = require("./EavAttributeOption");
var _EavAttributeOptionSwatch = require("./EavAttributeOptionSwatch");
var _EavAttributeOptionValue = require("./EavAttributeOptionValue");
var _EavAttributeSet = require("./EavAttributeSet");
var _EavEntity = require("./EavEntity");
var _EavEntityAttribute = require("./EavEntityAttribute");
var _EavEntityDatetime = require("./EavEntityDatetime");
var _EavEntityDecimal = require("./EavEntityDecimal");
var _EavEntityInt = require("./EavEntityInt");
var _EavEntityStore = require("./EavEntityStore");
var _EavEntityText = require("./EavEntityText");
var _EavEntityType = require("./EavEntityType");
var _EavEntityVarchar = require("./EavEntityVarchar");
var _EavFormElement = require("./EavFormElement");
var _EavFormFieldset = require("./EavFormFieldset");
var _EavFormFieldsetLabel = require("./EavFormFieldsetLabel");
var _EavFormType = require("./EavFormType");
var _EavFormTypeEntity = require("./EavFormTypeEntity");
var _EmailTemplate = require("./EmailTemplate");
var _Flag = require("./Flag");
var _GiftMessage = require("./GiftMessage");
var _GoogleoptimizerCode = require("./GoogleoptimizerCode");
var _ImportHistory = require("./ImportHistory");
var _ImportexportImportdata = require("./ImportexportImportdata");
var _IndexerState = require("./IndexerState");
var _Integration = require("./Integration");
var _LayoutLink = require("./LayoutLink");
var _LayoutUpdate = require("./LayoutUpdate");
var _LoginAsCustomer = require("./LoginAsCustomer");
var _LoginAsCustomerAssistanceAllowed = require("./LoginAsCustomerAssistanceAllowed");
var _MagentoAcknowledgedBulk = require("./MagentoAcknowledgedBulk");
var _MagentoBulk = require("./MagentoBulk");
var _MagentoLoginAsCustomerLog = require("./MagentoLoginAsCustomerLog");
var _MagentoOperation = require("./MagentoOperation");
var _MediaContentAsset = require("./MediaContentAsset");
var _MediaGalleryAsset = require("./MediaGalleryAsset");
var _MediaGalleryAssetKeyword = require("./MediaGalleryAssetKeyword");
var _MediaGalleryKeyword = require("./MediaGalleryKeyword");
var _MviewState = require("./MviewState");
var _NewsletterProblem = require("./NewsletterProblem");
var _NewsletterQueue = require("./NewsletterQueue");
var _NewsletterQueueLink = require("./NewsletterQueueLink");
var _NewsletterQueueStoreLink = require("./NewsletterQueueStoreLink");
var _NewsletterSubscriber = require("./NewsletterSubscriber");
var _NewsletterTemplate = require("./NewsletterTemplate");
var _OauthConsumer = require("./OauthConsumer");
var _OauthNonce = require("./OauthNonce");
var _OauthToken = require("./OauthToken");
var _OauthTokenRequestLog = require("./OauthTokenRequestLog");
var _PasswordResetRequestEvent = require("./PasswordResetRequestEvent");
var _PatchList = require("./PatchList");
var _PaypalBillingAgreement = require("./PaypalBillingAgreement");
var _PaypalBillingAgreementOrder = require("./PaypalBillingAgreementOrder");
var _PaypalCert = require("./PaypalCert");
var _PaypalPaymentTransaction = require("./PaypalPaymentTransaction");
var _PaypalSettlementReport = require("./PaypalSettlementReport");
var _PaypalSettlementReportRow = require("./PaypalSettlementReportRow");
var _PersistentSession = require("./PersistentSession");
var _ProductAlertPrice = require("./ProductAlertPrice");
var _ProductAlertStock = require("./ProductAlertStock");
var _Queue = require("./Queue");
var _QueueLock = require("./QueueLock");
var _QueueMessage = require("./QueueMessage");
var _QueueMessageStatus = require("./QueueMessageStatus");
var _QueuePoisonPill = require("./QueuePoisonPill");
var _Quote = require("./Quote");
var _QuoteAddress = require("./QuoteAddress");
var _QuoteAddressItem = require("./QuoteAddressItem");
var _QuoteIdMask = require("./QuoteIdMask");
var _QuoteItem = require("./QuoteItem");
var _QuoteItemOption = require("./QuoteItemOption");
var _QuotePayment = require("./QuotePayment");
var _QuoteShippingRate = require("./QuoteShippingRate");
var _Rating = require("./Rating");
var _RatingEntity = require("./RatingEntity");
var _RatingOption = require("./RatingOption");
var _RatingOptionVote = require("./RatingOptionVote");
var _RatingOptionVoteAggregated = require("./RatingOptionVoteAggregated");
var _RatingStore = require("./RatingStore");
var _RatingTitle = require("./RatingTitle");
var _ReleaseNotificationViewerLog = require("./ReleaseNotificationViewerLog");
var _ReportComparedProductIndex = require("./ReportComparedProductIndex");
var _ReportEvent = require("./ReportEvent");
var _ReportEventTypes = require("./ReportEventTypes");
var _ReportViewedProductAggregatedDaily = require("./ReportViewedProductAggregatedDaily");
var _ReportViewedProductAggregatedMonthly = require("./ReportViewedProductAggregatedMonthly");
var _ReportViewedProductAggregatedYearly = require("./ReportViewedProductAggregatedYearly");
var _ReportViewedProductIndex = require("./ReportViewedProductIndex");
var _ReportingCounts = require("./ReportingCounts");
var _ReportingModuleStatus = require("./ReportingModuleStatus");
var _ReportingOrders = require("./ReportingOrders");
var _ReportingSystemUpdates = require("./ReportingSystemUpdates");
var _ReportingUsers = require("./ReportingUsers");
var _Review = require("./Review");
var _ReviewDetail = require("./ReviewDetail");
var _ReviewEntity = require("./ReviewEntity");
var _ReviewEntitySummary = require("./ReviewEntitySummary");
var _ReviewStatus = require("./ReviewStatus");
var _ReviewStore = require("./ReviewStore");
var _SalesBestsellersAggregatedDaily = require("./SalesBestsellersAggregatedDaily");
var _SalesBestsellersAggregatedMonthly = require("./SalesBestsellersAggregatedMonthly");
var _SalesBestsellersAggregatedYearly = require("./SalesBestsellersAggregatedYearly");
var _SalesCreditmemo = require("./SalesCreditmemo");
var _SalesCreditmemoComment = require("./SalesCreditmemoComment");
var _SalesCreditmemoGrid = require("./SalesCreditmemoGrid");
var _SalesCreditmemoItem = require("./SalesCreditmemoItem");
var _SalesInvoice = require("./SalesInvoice");
var _SalesInvoiceComment = require("./SalesInvoiceComment");
var _SalesInvoiceGrid = require("./SalesInvoiceGrid");
var _SalesInvoiceItem = require("./SalesInvoiceItem");
var _SalesInvoicedAggregated = require("./SalesInvoicedAggregated");
var _SalesInvoicedAggregatedOrder = require("./SalesInvoicedAggregatedOrder");
var _SalesOrder = require("./SalesOrder");
var _SalesOrderAddress = require("./SalesOrderAddress");
var _SalesOrderAggregatedCreated = require("./SalesOrderAggregatedCreated");
var _SalesOrderAggregatedUpdated = require("./SalesOrderAggregatedUpdated");
var _SalesOrderGrid = require("./SalesOrderGrid");
var _SalesOrderItem = require("./SalesOrderItem");
var _SalesOrderPayment = require("./SalesOrderPayment");
var _SalesOrderStatus = require("./SalesOrderStatus");
var _SalesOrderStatusHistory = require("./SalesOrderStatusHistory");
var _SalesOrderStatusLabel = require("./SalesOrderStatusLabel");
var _SalesOrderStatusState = require("./SalesOrderStatusState");
var _SalesOrderTax = require("./SalesOrderTax");
var _SalesOrderTaxItem = require("./SalesOrderTaxItem");
var _SalesPaymentTransaction = require("./SalesPaymentTransaction");
var _SalesRefundedAggregated = require("./SalesRefundedAggregated");
var _SalesRefundedAggregatedOrder = require("./SalesRefundedAggregatedOrder");
var _SalesSequenceMeta = require("./SalesSequenceMeta");
var _SalesSequenceProfile = require("./SalesSequenceProfile");
var _SalesShipment = require("./SalesShipment");
var _SalesShipmentComment = require("./SalesShipmentComment");
var _SalesShipmentGrid = require("./SalesShipmentGrid");
var _SalesShipmentItem = require("./SalesShipmentItem");
var _SalesShipmentTrack = require("./SalesShipmentTrack");
var _SalesShippingAggregated = require("./SalesShippingAggregated");
var _SalesShippingAggregatedOrder = require("./SalesShippingAggregatedOrder");
var _Salesrule = require("./Salesrule");
var _SalesruleCoupon = require("./SalesruleCoupon");
var _SalesruleCouponAggregated = require("./SalesruleCouponAggregated");
var _SalesruleCouponAggregatedOrder = require("./SalesruleCouponAggregatedOrder");
var _SalesruleCouponAggregatedUpdated = require("./SalesruleCouponAggregatedUpdated");
var _SalesruleCouponUsage = require("./SalesruleCouponUsage");
var _SalesruleCustomer = require("./SalesruleCustomer");
var _SalesruleCustomerGroup = require("./SalesruleCustomerGroup");
var _SalesruleLabel = require("./SalesruleLabel");
var _SalesruleProductAttribute = require("./SalesruleProductAttribute");
var _SalesruleWebsite = require("./SalesruleWebsite");
var _SearchQuery = require("./SearchQuery");
var _SearchSynonyms = require("./SearchSynonyms");
var _SendfriendLog = require("./SendfriendLog");
var _SequenceCreditmemo0 = require("./SequenceCreditmemo0");
var _SequenceCreditmemo1 = require("./SequenceCreditmemo1");
var _SequenceInvoice0 = require("./SequenceInvoice0");
var _SequenceInvoice1 = require("./SequenceInvoice1");
var _SequenceOrder0 = require("./SequenceOrder0");
var _SequenceOrder1 = require("./SequenceOrder1");
var _SequenceShipment0 = require("./SequenceShipment0");
var _SequenceShipment1 = require("./SequenceShipment1");
var _Session = require("./Session");
var _SetupModule = require("./SetupModule");
var _ShippingTablerate = require("./ShippingTablerate");
var _Sitemap = require("./Sitemap");
var _Store = require("./Store");
var _StoreGroup = require("./StoreGroup");
var _StoreWebsite = require("./StoreWebsite");
var _TaxCalculation = require("./TaxCalculation");
var _TaxCalculationRate = require("./TaxCalculationRate");
var _TaxCalculationRateTitle = require("./TaxCalculationRateTitle");
var _TaxCalculationRule = require("./TaxCalculationRule");
var _TaxClass = require("./TaxClass");
var _TaxOrderAggregatedCreated = require("./TaxOrderAggregatedCreated");
var _TaxOrderAggregatedUpdated = require("./TaxOrderAggregatedUpdated");
var _Theme = require("./Theme");
var _ThemeFile = require("./ThemeFile");
var _Translation = require("./Translation");
var _UiBookmark = require("./UiBookmark");
var _UrlRewrite = require("./UrlRewrite");
var _Variable = require("./Variable");
var _VariableValue = require("./VariableValue");
var _VaultPaymentToken = require("./VaultPaymentToken");
var _VaultPaymentTokenOrderPaymentLink = require("./VaultPaymentTokenOrderPaymentLink");
var _WeeeTax = require("./WeeeTax");
var _Widget = require("./Widget");
var _WidgetInstance = require("./WidgetInstance");
var _WidgetInstancePage = require("./WidgetInstancePage");
var _WidgetInstancePageLayout = require("./WidgetInstancePageLayout");
var _Wishlist = require("./Wishlist");
var _WishlistItem = require("./WishlistItem");
var _WishlistItemOption = require("./WishlistItemOption");

function initModels(sequelize) {
  var AdminAnalyticsUsageVersionLog = _AdminAnalyticsUsageVersionLog(sequelize, DataTypes);
  var AdminPasswords = _AdminPasswords(sequelize, DataTypes);
  var AdminSystemMessages = _AdminSystemMessages(sequelize, DataTypes);
  var AdminUser = _AdminUser(sequelize, DataTypes);
  var AdminUserExpiration = _AdminUserExpiration(sequelize, DataTypes);
  var AdminUserSession = _AdminUserSession(sequelize, DataTypes);
  var AdminnotificationInbox = _AdminnotificationInbox(sequelize, DataTypes);
  var AuthorizationRole = _AuthorizationRole(sequelize, DataTypes);
  var AuthorizationRule = _AuthorizationRule(sequelize, DataTypes);
  var Cache = _Cache(sequelize, DataTypes);
  var CacheTag = _CacheTag(sequelize, DataTypes);
  var CaptchaLog = _CaptchaLog(sequelize, DataTypes);
  var CatalogCategoryEntity = _CatalogCategoryEntity(sequelize, DataTypes);
  var CatalogCategoryEntityDatetime = _CatalogCategoryEntityDatetime(sequelize, DataTypes);
  var CatalogCategoryEntityDecimal = _CatalogCategoryEntityDecimal(sequelize, DataTypes);
  var CatalogCategoryEntityInt = _CatalogCategoryEntityInt(sequelize, DataTypes);
  var CatalogCategoryEntityText = _CatalogCategoryEntityText(sequelize, DataTypes);
  var CatalogCategoryEntityVarchar = _CatalogCategoryEntityVarchar(sequelize, DataTypes);
  var CatalogCategoryProduct = _CatalogCategoryProduct(sequelize, DataTypes);
  var CatalogCategoryProductIndex = _CatalogCategoryProductIndex(sequelize, DataTypes);
  var CatalogCategoryProductIndexReplica = _CatalogCategoryProductIndexReplica(sequelize, DataTypes);
  var CatalogCategoryProductIndexStore1 = _CatalogCategoryProductIndexStore1(sequelize, DataTypes);
  var CatalogCategoryProductIndexStore1Replica = _CatalogCategoryProductIndexStore1Replica(sequelize, DataTypes);
  var CatalogCategoryProductIndexTmp = _CatalogCategoryProductIndexTmp(sequelize, DataTypes);
  var CatalogCompareItem = _CatalogCompareItem(sequelize, DataTypes);
  var CatalogCompareList = _CatalogCompareList(sequelize, DataTypes);
  var CatalogEavAttribute = _CatalogEavAttribute(sequelize, DataTypes);
  var CatalogProductBundleOption = _CatalogProductBundleOption(sequelize, DataTypes);
  var CatalogProductBundleOptionValue = _CatalogProductBundleOptionValue(sequelize, DataTypes);
  var CatalogProductBundlePriceIndex = _CatalogProductBundlePriceIndex(sequelize, DataTypes);
  var CatalogProductBundleSelection = _CatalogProductBundleSelection(sequelize, DataTypes);
  var CatalogProductBundleSelectionPrice = _CatalogProductBundleSelectionPrice(sequelize, DataTypes);
  var CatalogProductBundleStockIndex = _CatalogProductBundleStockIndex(sequelize, DataTypes);
  var CatalogProductEntity = _CatalogProductEntity(sequelize, DataTypes);
  var CatalogProductEntityDatetime = _CatalogProductEntityDatetime(sequelize, DataTypes);
  var CatalogProductEntityDecimal = _CatalogProductEntityDecimal(sequelize, DataTypes);
  var CatalogProductEntityGallery = _CatalogProductEntityGallery(sequelize, DataTypes);
  var CatalogProductEntityInt = _CatalogProductEntityInt(sequelize, DataTypes);
  var CatalogProductEntityMediaGallery = _CatalogProductEntityMediaGallery(sequelize, DataTypes);
  var CatalogProductEntityMediaGalleryValue = _CatalogProductEntityMediaGalleryValue(sequelize, DataTypes);
  var CatalogProductEntityMediaGalleryValueToEntity = _CatalogProductEntityMediaGalleryValueToEntity(sequelize, DataTypes);
  var CatalogProductEntityMediaGalleryValueVideo = _CatalogProductEntityMediaGalleryValueVideo(sequelize, DataTypes);
  var CatalogProductEntityText = _CatalogProductEntityText(sequelize, DataTypes);
  var CatalogProductEntityTierPrice = _CatalogProductEntityTierPrice(sequelize, DataTypes);
  var CatalogProductEntityVarchar = _CatalogProductEntityVarchar(sequelize, DataTypes);
  var CatalogProductFrontendAction = _CatalogProductFrontendAction(sequelize, DataTypes);
  var CatalogProductIndexEav = _CatalogProductIndexEav(sequelize, DataTypes);
  var CatalogProductIndexEavDecimal = _CatalogProductIndexEavDecimal(sequelize, DataTypes);
  var CatalogProductIndexEavDecimalIdx = _CatalogProductIndexEavDecimalIdx(sequelize, DataTypes);
  var CatalogProductIndexEavDecimalReplica = _CatalogProductIndexEavDecimalReplica(sequelize, DataTypes);
  var CatalogProductIndexEavDecimalTmp = _CatalogProductIndexEavDecimalTmp(sequelize, DataTypes);
  var CatalogProductIndexEavIdx = _CatalogProductIndexEavIdx(sequelize, DataTypes);
  var CatalogProductIndexEavReplica = _CatalogProductIndexEavReplica(sequelize, DataTypes);
  var CatalogProductIndexEavTmp = _CatalogProductIndexEavTmp(sequelize, DataTypes);
  var CatalogProductIndexPrice = _CatalogProductIndexPrice(sequelize, DataTypes);
  var CatalogProductIndexPriceBundleIdx = _CatalogProductIndexPriceBundleIdx(sequelize, DataTypes);
  var CatalogProductIndexPriceBundleOptIdx = _CatalogProductIndexPriceBundleOptIdx(sequelize, DataTypes);
  var CatalogProductIndexPriceBundleOptTmp = _CatalogProductIndexPriceBundleOptTmp(sequelize, DataTypes);
  var CatalogProductIndexPriceBundleSelIdx = _CatalogProductIndexPriceBundleSelIdx(sequelize, DataTypes);
  var CatalogProductIndexPriceBundleSelTmp = _CatalogProductIndexPriceBundleSelTmp(sequelize, DataTypes);
  var CatalogProductIndexPriceBundleTmp = _CatalogProductIndexPriceBundleTmp(sequelize, DataTypes);
  var CatalogProductIndexPriceCfgOptAgrIdx = _CatalogProductIndexPriceCfgOptAgrIdx(sequelize, DataTypes);
  var CatalogProductIndexPriceCfgOptAgrTmp = _CatalogProductIndexPriceCfgOptAgrTmp(sequelize, DataTypes);
  var CatalogProductIndexPriceCfgOptIdx = _CatalogProductIndexPriceCfgOptIdx(sequelize, DataTypes);
  var CatalogProductIndexPriceCfgOptTmp = _CatalogProductIndexPriceCfgOptTmp(sequelize, DataTypes);
  var CatalogProductIndexPriceDownlodIdx = _CatalogProductIndexPriceDownlodIdx(sequelize, DataTypes);
  var CatalogProductIndexPriceDownlodTmp = _CatalogProductIndexPriceDownlodTmp(sequelize, DataTypes);
  var CatalogProductIndexPriceFinalIdx = _CatalogProductIndexPriceFinalIdx(sequelize, DataTypes);
  var CatalogProductIndexPriceFinalTmp = _CatalogProductIndexPriceFinalTmp(sequelize, DataTypes);
  var CatalogProductIndexPriceIdx = _CatalogProductIndexPriceIdx(sequelize, DataTypes);
  var CatalogProductIndexPriceOptAgrIdx = _CatalogProductIndexPriceOptAgrIdx(sequelize, DataTypes);
  var CatalogProductIndexPriceOptAgrTmp = _CatalogProductIndexPriceOptAgrTmp(sequelize, DataTypes);
  var CatalogProductIndexPriceOptIdx = _CatalogProductIndexPriceOptIdx(sequelize, DataTypes);
  var CatalogProductIndexPriceOptTmp = _CatalogProductIndexPriceOptTmp(sequelize, DataTypes);
  var CatalogProductIndexPriceReplica = _CatalogProductIndexPriceReplica(sequelize, DataTypes);
  var CatalogProductIndexPriceTmp = _CatalogProductIndexPriceTmp(sequelize, DataTypes);
  var CatalogProductIndexTierPrice = _CatalogProductIndexTierPrice(sequelize, DataTypes);
  var CatalogProductIndexWebsite = _CatalogProductIndexWebsite(sequelize, DataTypes);
  var CatalogProductLink = _CatalogProductLink(sequelize, DataTypes);
  var CatalogProductLinkAttribute = _CatalogProductLinkAttribute(sequelize, DataTypes);
  var CatalogProductLinkAttributeDecimal = _CatalogProductLinkAttributeDecimal(sequelize, DataTypes);
  var CatalogProductLinkAttributeInt = _CatalogProductLinkAttributeInt(sequelize, DataTypes);
  var CatalogProductLinkAttributeVarchar = _CatalogProductLinkAttributeVarchar(sequelize, DataTypes);
  var CatalogProductLinkType = _CatalogProductLinkType(sequelize, DataTypes);
  var CatalogProductOption = _CatalogProductOption(sequelize, DataTypes);
  var CatalogProductOptionPrice = _CatalogProductOptionPrice(sequelize, DataTypes);
  var CatalogProductOptionTitle = _CatalogProductOptionTitle(sequelize, DataTypes);
  var CatalogProductOptionTypePrice = _CatalogProductOptionTypePrice(sequelize, DataTypes);
  var CatalogProductOptionTypeTitle = _CatalogProductOptionTypeTitle(sequelize, DataTypes);
  var CatalogProductOptionTypeValue = _CatalogProductOptionTypeValue(sequelize, DataTypes);
  var CatalogProductRelation = _CatalogProductRelation(sequelize, DataTypes);
  var CatalogProductSuperAttribute = _CatalogProductSuperAttribute(sequelize, DataTypes);
  var CatalogProductSuperAttributeLabel = _CatalogProductSuperAttributeLabel(sequelize, DataTypes);
  var CatalogProductSuperLink = _CatalogProductSuperLink(sequelize, DataTypes);
  var CatalogProductWebsite = _CatalogProductWebsite(sequelize, DataTypes);
  var CatalogUrlRewriteProductCategory = _CatalogUrlRewriteProductCategory(sequelize, DataTypes);
  var CataloginventoryStock = _CataloginventoryStock(sequelize, DataTypes);
  var CataloginventoryStockItem = _CataloginventoryStockItem(sequelize, DataTypes);
  var CataloginventoryStockStatus = _CataloginventoryStockStatus(sequelize, DataTypes);
  var CataloginventoryStockStatusIdx = _CataloginventoryStockStatusIdx(sequelize, DataTypes);
  var CataloginventoryStockStatusReplica = _CataloginventoryStockStatusReplica(sequelize, DataTypes);
  var CataloginventoryStockStatusTmp = _CataloginventoryStockStatusTmp(sequelize, DataTypes);
  var Catalogrule = _Catalogrule(sequelize, DataTypes);
  var CatalogruleCustomerGroup = _CatalogruleCustomerGroup(sequelize, DataTypes);
  var CatalogruleGroupWebsite = _CatalogruleGroupWebsite(sequelize, DataTypes);
  var CatalogruleGroupWebsiteReplica = _CatalogruleGroupWebsiteReplica(sequelize, DataTypes);
  var CatalogruleProduct = _CatalogruleProduct(sequelize, DataTypes);
  var CatalogruleProductPrice = _CatalogruleProductPrice(sequelize, DataTypes);
  var CatalogruleProductPriceReplica = _CatalogruleProductPriceReplica(sequelize, DataTypes);
  var CatalogruleProductReplica = _CatalogruleProductReplica(sequelize, DataTypes);
  var CatalogruleWebsite = _CatalogruleWebsite(sequelize, DataTypes);
  var CatalogsearchRecommendations = _CatalogsearchRecommendations(sequelize, DataTypes);
  var CheckoutAgreement = _CheckoutAgreement(sequelize, DataTypes);
  var CheckoutAgreementStore = _CheckoutAgreementStore(sequelize, DataTypes);
  var CmsBlock = _CmsBlock(sequelize, DataTypes);
  var CmsBlockStore = _CmsBlockStore(sequelize, DataTypes);
  var CmsPage = _CmsPage(sequelize, DataTypes);
  var CmsPageStore = _CmsPageStore(sequelize, DataTypes);
  var CoreConfigData = _CoreConfigData(sequelize, DataTypes);
  var CronSchedule = _CronSchedule(sequelize, DataTypes);
  var CustomerAddressEntity = _CustomerAddressEntity(sequelize, DataTypes);
  var CustomerAddressEntityDatetime = _CustomerAddressEntityDatetime(sequelize, DataTypes);
  var CustomerAddressEntityDecimal = _CustomerAddressEntityDecimal(sequelize, DataTypes);
  var CustomerAddressEntityInt = _CustomerAddressEntityInt(sequelize, DataTypes);
  var CustomerAddressEntityText = _CustomerAddressEntityText(sequelize, DataTypes);
  var CustomerAddressEntityVarchar = _CustomerAddressEntityVarchar(sequelize, DataTypes);
  var CustomerEavAttribute = _CustomerEavAttribute(sequelize, DataTypes);
  var CustomerEavAttributeWebsite = _CustomerEavAttributeWebsite(sequelize, DataTypes);
  var CustomerEntity = _CustomerEntity(sequelize, DataTypes);
  var CustomerEntityDatetime = _CustomerEntityDatetime(sequelize, DataTypes);
  var CustomerEntityDecimal = _CustomerEntityDecimal(sequelize, DataTypes);
  var CustomerEntityInt = _CustomerEntityInt(sequelize, DataTypes);
  var CustomerEntityText = _CustomerEntityText(sequelize, DataTypes);
  var CustomerEntityVarchar = _CustomerEntityVarchar(sequelize, DataTypes);
  var CustomerFormAttribute = _CustomerFormAttribute(sequelize, DataTypes);
  var CustomerGridFlat = _CustomerGridFlat(sequelize, DataTypes);
  var CustomerGroup = _CustomerGroup(sequelize, DataTypes);
  var CustomerLog = _CustomerLog(sequelize, DataTypes);
  var CustomerVisitor = _CustomerVisitor(sequelize, DataTypes);
  var DesignChange = _DesignChange(sequelize, DataTypes);
  var DesignConfigGridFlat = _DesignConfigGridFlat(sequelize, DataTypes);
  var DirectoryCountry = _DirectoryCountry(sequelize, DataTypes);
  var DirectoryCountryFormat = _DirectoryCountryFormat(sequelize, DataTypes);
  var DirectoryCountryRegion = _DirectoryCountryRegion(sequelize, DataTypes);
  var DirectoryCountryRegionName = _DirectoryCountryRegionName(sequelize, DataTypes);
  var DirectoryCurrencyRate = _DirectoryCurrencyRate(sequelize, DataTypes);
  var DownloadableLink = _DownloadableLink(sequelize, DataTypes);
  var DownloadableLinkPrice = _DownloadableLinkPrice(sequelize, DataTypes);
  var DownloadableLinkPurchased = _DownloadableLinkPurchased(sequelize, DataTypes);
  var DownloadableLinkPurchasedItem = _DownloadableLinkPurchasedItem(sequelize, DataTypes);
  var DownloadableLinkTitle = _DownloadableLinkTitle(sequelize, DataTypes);
  var DownloadableSample = _DownloadableSample(sequelize, DataTypes);
  var DownloadableSampleTitle = _DownloadableSampleTitle(sequelize, DataTypes);
  var EavAttribute = _EavAttribute(sequelize, DataTypes);
  var EavAttributeGroup = _EavAttributeGroup(sequelize, DataTypes);
  var EavAttributeLabel = _EavAttributeLabel(sequelize, DataTypes);
  var EavAttributeOption = _EavAttributeOption(sequelize, DataTypes);
  var EavAttributeOptionSwatch = _EavAttributeOptionSwatch(sequelize, DataTypes);
  var EavAttributeOptionValue = _EavAttributeOptionValue(sequelize, DataTypes);
  var EavAttributeSet = _EavAttributeSet(sequelize, DataTypes);
  var EavEntity = _EavEntity(sequelize, DataTypes);
  var EavEntityAttribute = _EavEntityAttribute(sequelize, DataTypes);
  var EavEntityDatetime = _EavEntityDatetime(sequelize, DataTypes);
  var EavEntityDecimal = _EavEntityDecimal(sequelize, DataTypes);
  var EavEntityInt = _EavEntityInt(sequelize, DataTypes);
  var EavEntityStore = _EavEntityStore(sequelize, DataTypes);
  var EavEntityText = _EavEntityText(sequelize, DataTypes);
  var EavEntityType = _EavEntityType(sequelize, DataTypes);
  var EavEntityVarchar = _EavEntityVarchar(sequelize, DataTypes);
  var EavFormElement = _EavFormElement(sequelize, DataTypes);
  var EavFormFieldset = _EavFormFieldset(sequelize, DataTypes);
  var EavFormFieldsetLabel = _EavFormFieldsetLabel(sequelize, DataTypes);
  var EavFormType = _EavFormType(sequelize, DataTypes);
  var EavFormTypeEntity = _EavFormTypeEntity(sequelize, DataTypes);
  var EmailTemplate = _EmailTemplate(sequelize, DataTypes);
  var Flag = _Flag(sequelize, DataTypes);
  var GiftMessage = _GiftMessage(sequelize, DataTypes);
  var GoogleoptimizerCode = _GoogleoptimizerCode(sequelize, DataTypes);
  var ImportHistory = _ImportHistory(sequelize, DataTypes);
  var ImportexportImportdata = _ImportexportImportdata(sequelize, DataTypes);
  var IndexerState = _IndexerState(sequelize, DataTypes);
  var Integration = _Integration(sequelize, DataTypes);
  var LayoutLink = _LayoutLink(sequelize, DataTypes);
  var LayoutUpdate = _LayoutUpdate(sequelize, DataTypes);
  var LoginAsCustomer = _LoginAsCustomer(sequelize, DataTypes);
  var LoginAsCustomerAssistanceAllowed = _LoginAsCustomerAssistanceAllowed(sequelize, DataTypes);
  var MagentoAcknowledgedBulk = _MagentoAcknowledgedBulk(sequelize, DataTypes);
  var MagentoBulk = _MagentoBulk(sequelize, DataTypes);
  var MagentoLoginAsCustomerLog = _MagentoLoginAsCustomerLog(sequelize, DataTypes);
  var MagentoOperation = _MagentoOperation(sequelize, DataTypes);
  var MediaContentAsset = _MediaContentAsset(sequelize, DataTypes);
  var MediaGalleryAsset = _MediaGalleryAsset(sequelize, DataTypes);
  var MediaGalleryAssetKeyword = _MediaGalleryAssetKeyword(sequelize, DataTypes);
  var MediaGalleryKeyword = _MediaGalleryKeyword(sequelize, DataTypes);
  var MviewState = _MviewState(sequelize, DataTypes);
  var NewsletterProblem = _NewsletterProblem(sequelize, DataTypes);
  var NewsletterQueue = _NewsletterQueue(sequelize, DataTypes);
  var NewsletterQueueLink = _NewsletterQueueLink(sequelize, DataTypes);
  var NewsletterQueueStoreLink = _NewsletterQueueStoreLink(sequelize, DataTypes);
  var NewsletterSubscriber = _NewsletterSubscriber(sequelize, DataTypes);
  var NewsletterTemplate = _NewsletterTemplate(sequelize, DataTypes);
  var OauthConsumer = _OauthConsumer(sequelize, DataTypes);
  var OauthNonce = _OauthNonce(sequelize, DataTypes);
  var OauthToken = _OauthToken(sequelize, DataTypes);
  var OauthTokenRequestLog = _OauthTokenRequestLog(sequelize, DataTypes);
  var PasswordResetRequestEvent = _PasswordResetRequestEvent(sequelize, DataTypes);
  var PatchList = _PatchList(sequelize, DataTypes);
  var PaypalBillingAgreement = _PaypalBillingAgreement(sequelize, DataTypes);
  var PaypalBillingAgreementOrder = _PaypalBillingAgreementOrder(sequelize, DataTypes);
  var PaypalCert = _PaypalCert(sequelize, DataTypes);
  var PaypalPaymentTransaction = _PaypalPaymentTransaction(sequelize, DataTypes);
  var PaypalSettlementReport = _PaypalSettlementReport(sequelize, DataTypes);
  var PaypalSettlementReportRow = _PaypalSettlementReportRow(sequelize, DataTypes);
  var PersistentSession = _PersistentSession(sequelize, DataTypes);
  var ProductAlertPrice = _ProductAlertPrice(sequelize, DataTypes);
  var ProductAlertStock = _ProductAlertStock(sequelize, DataTypes);
  var Queue = _Queue(sequelize, DataTypes);
  var QueueLock = _QueueLock(sequelize, DataTypes);
  var QueueMessage = _QueueMessage(sequelize, DataTypes);
  var QueueMessageStatus = _QueueMessageStatus(sequelize, DataTypes);
  var QueuePoisonPill = _QueuePoisonPill(sequelize, DataTypes);
  var Quote = _Quote(sequelize, DataTypes);
  var QuoteAddress = _QuoteAddress(sequelize, DataTypes);
  var QuoteAddressItem = _QuoteAddressItem(sequelize, DataTypes);
  var QuoteIdMask = _QuoteIdMask(sequelize, DataTypes);
  var QuoteItem = _QuoteItem(sequelize, DataTypes);
  var QuoteItemOption = _QuoteItemOption(sequelize, DataTypes);
  var QuotePayment = _QuotePayment(sequelize, DataTypes);
  var QuoteShippingRate = _QuoteShippingRate(sequelize, DataTypes);
  var Rating = _Rating(sequelize, DataTypes);
  var RatingEntity = _RatingEntity(sequelize, DataTypes);
  var RatingOption = _RatingOption(sequelize, DataTypes);
  var RatingOptionVote = _RatingOptionVote(sequelize, DataTypes);
  var RatingOptionVoteAggregated = _RatingOptionVoteAggregated(sequelize, DataTypes);
  var RatingStore = _RatingStore(sequelize, DataTypes);
  var RatingTitle = _RatingTitle(sequelize, DataTypes);
  var ReleaseNotificationViewerLog = _ReleaseNotificationViewerLog(sequelize, DataTypes);
  var ReportComparedProductIndex = _ReportComparedProductIndex(sequelize, DataTypes);
  var ReportEvent = _ReportEvent(sequelize, DataTypes);
  var ReportEventTypes = _ReportEventTypes(sequelize, DataTypes);
  var ReportViewedProductAggregatedDaily = _ReportViewedProductAggregatedDaily(sequelize, DataTypes);
  var ReportViewedProductAggregatedMonthly = _ReportViewedProductAggregatedMonthly(sequelize, DataTypes);
  var ReportViewedProductAggregatedYearly = _ReportViewedProductAggregatedYearly(sequelize, DataTypes);
  var ReportViewedProductIndex = _ReportViewedProductIndex(sequelize, DataTypes);
  var ReportingCounts = _ReportingCounts(sequelize, DataTypes);
  var ReportingModuleStatus = _ReportingModuleStatus(sequelize, DataTypes);
  var ReportingOrders = _ReportingOrders(sequelize, DataTypes);
  var ReportingSystemUpdates = _ReportingSystemUpdates(sequelize, DataTypes);
  var ReportingUsers = _ReportingUsers(sequelize, DataTypes);
  var Review = _Review(sequelize, DataTypes);
  var ReviewDetail = _ReviewDetail(sequelize, DataTypes);
  var ReviewEntity = _ReviewEntity(sequelize, DataTypes);
  var ReviewEntitySummary = _ReviewEntitySummary(sequelize, DataTypes);
  var ReviewStatus = _ReviewStatus(sequelize, DataTypes);
  var ReviewStore = _ReviewStore(sequelize, DataTypes);
  var SalesBestsellersAggregatedDaily = _SalesBestsellersAggregatedDaily(sequelize, DataTypes);
  var SalesBestsellersAggregatedMonthly = _SalesBestsellersAggregatedMonthly(sequelize, DataTypes);
  var SalesBestsellersAggregatedYearly = _SalesBestsellersAggregatedYearly(sequelize, DataTypes);
  var SalesCreditmemo = _SalesCreditmemo(sequelize, DataTypes);
  var SalesCreditmemoComment = _SalesCreditmemoComment(sequelize, DataTypes);
  var SalesCreditmemoGrid = _SalesCreditmemoGrid(sequelize, DataTypes);
  var SalesCreditmemoItem = _SalesCreditmemoItem(sequelize, DataTypes);
  var SalesInvoice = _SalesInvoice(sequelize, DataTypes);
  var SalesInvoiceComment = _SalesInvoiceComment(sequelize, DataTypes);
  var SalesInvoiceGrid = _SalesInvoiceGrid(sequelize, DataTypes);
  var SalesInvoiceItem = _SalesInvoiceItem(sequelize, DataTypes);
  var SalesInvoicedAggregated = _SalesInvoicedAggregated(sequelize, DataTypes);
  var SalesInvoicedAggregatedOrder = _SalesInvoicedAggregatedOrder(sequelize, DataTypes);
  var SalesOrder = _SalesOrder(sequelize, DataTypes);
  var SalesOrderAddress = _SalesOrderAddress(sequelize, DataTypes);
  var SalesOrderAggregatedCreated = _SalesOrderAggregatedCreated(sequelize, DataTypes);
  var SalesOrderAggregatedUpdated = _SalesOrderAggregatedUpdated(sequelize, DataTypes);
  var SalesOrderGrid = _SalesOrderGrid(sequelize, DataTypes);
  var SalesOrderItem = _SalesOrderItem(sequelize, DataTypes);
  var SalesOrderPayment = _SalesOrderPayment(sequelize, DataTypes);
  var SalesOrderStatus = _SalesOrderStatus(sequelize, DataTypes);
  var SalesOrderStatusHistory = _SalesOrderStatusHistory(sequelize, DataTypes);
  var SalesOrderStatusLabel = _SalesOrderStatusLabel(sequelize, DataTypes);
  var SalesOrderStatusState = _SalesOrderStatusState(sequelize, DataTypes);
  var SalesOrderTax = _SalesOrderTax(sequelize, DataTypes);
  var SalesOrderTaxItem = _SalesOrderTaxItem(sequelize, DataTypes);
  var SalesPaymentTransaction = _SalesPaymentTransaction(sequelize, DataTypes);
  var SalesRefundedAggregated = _SalesRefundedAggregated(sequelize, DataTypes);
  var SalesRefundedAggregatedOrder = _SalesRefundedAggregatedOrder(sequelize, DataTypes);
  var SalesSequenceMeta = _SalesSequenceMeta(sequelize, DataTypes);
  var SalesSequenceProfile = _SalesSequenceProfile(sequelize, DataTypes);
  var SalesShipment = _SalesShipment(sequelize, DataTypes);
  var SalesShipmentComment = _SalesShipmentComment(sequelize, DataTypes);
  var SalesShipmentGrid = _SalesShipmentGrid(sequelize, DataTypes);
  var SalesShipmentItem = _SalesShipmentItem(sequelize, DataTypes);
  var SalesShipmentTrack = _SalesShipmentTrack(sequelize, DataTypes);
  var SalesShippingAggregated = _SalesShippingAggregated(sequelize, DataTypes);
  var SalesShippingAggregatedOrder = _SalesShippingAggregatedOrder(sequelize, DataTypes);
  var Salesrule = _Salesrule(sequelize, DataTypes);
  var SalesruleCoupon = _SalesruleCoupon(sequelize, DataTypes);
  var SalesruleCouponAggregated = _SalesruleCouponAggregated(sequelize, DataTypes);
  var SalesruleCouponAggregatedOrder = _SalesruleCouponAggregatedOrder(sequelize, DataTypes);
  var SalesruleCouponAggregatedUpdated = _SalesruleCouponAggregatedUpdated(sequelize, DataTypes);
  var SalesruleCouponUsage = _SalesruleCouponUsage(sequelize, DataTypes);
  var SalesruleCustomer = _SalesruleCustomer(sequelize, DataTypes);
  var SalesruleCustomerGroup = _SalesruleCustomerGroup(sequelize, DataTypes);
  var SalesruleLabel = _SalesruleLabel(sequelize, DataTypes);
  var SalesruleProductAttribute = _SalesruleProductAttribute(sequelize, DataTypes);
  var SalesruleWebsite = _SalesruleWebsite(sequelize, DataTypes);
  var SearchQuery = _SearchQuery(sequelize, DataTypes);
  var SearchSynonyms = _SearchSynonyms(sequelize, DataTypes);
  var SendfriendLog = _SendfriendLog(sequelize, DataTypes);
  var SequenceCreditmemo0 = _SequenceCreditmemo0(sequelize, DataTypes);
  var SequenceCreditmemo1 = _SequenceCreditmemo1(sequelize, DataTypes);
  var SequenceInvoice0 = _SequenceInvoice0(sequelize, DataTypes);
  var SequenceInvoice1 = _SequenceInvoice1(sequelize, DataTypes);
  var SequenceOrder0 = _SequenceOrder0(sequelize, DataTypes);
  var SequenceOrder1 = _SequenceOrder1(sequelize, DataTypes);
  var SequenceShipment0 = _SequenceShipment0(sequelize, DataTypes);
  var SequenceShipment1 = _SequenceShipment1(sequelize, DataTypes);
  var Session = _Session(sequelize, DataTypes);
  var SetupModule = _SetupModule(sequelize, DataTypes);
  var ShippingTablerate = _ShippingTablerate(sequelize, DataTypes);
  var Sitemap = _Sitemap(sequelize, DataTypes);
  var Store = _Store(sequelize, DataTypes);
  var StoreGroup = _StoreGroup(sequelize, DataTypes);
  var StoreWebsite = _StoreWebsite(sequelize, DataTypes);
  var TaxCalculation = _TaxCalculation(sequelize, DataTypes);
  var TaxCalculationRate = _TaxCalculationRate(sequelize, DataTypes);
  var TaxCalculationRateTitle = _TaxCalculationRateTitle(sequelize, DataTypes);
  var TaxCalculationRule = _TaxCalculationRule(sequelize, DataTypes);
  var TaxClass = _TaxClass(sequelize, DataTypes);
  var TaxOrderAggregatedCreated = _TaxOrderAggregatedCreated(sequelize, DataTypes);
  var TaxOrderAggregatedUpdated = _TaxOrderAggregatedUpdated(sequelize, DataTypes);
  var Theme = _Theme(sequelize, DataTypes);
  var ThemeFile = _ThemeFile(sequelize, DataTypes);
  var Translation = _Translation(sequelize, DataTypes);
  var UiBookmark = _UiBookmark(sequelize, DataTypes);
  var UrlRewrite = _UrlRewrite(sequelize, DataTypes);
  var Variable = _Variable(sequelize, DataTypes);
  var VariableValue = _VariableValue(sequelize, DataTypes);
  var VaultPaymentToken = _VaultPaymentToken(sequelize, DataTypes);
  var VaultPaymentTokenOrderPaymentLink = _VaultPaymentTokenOrderPaymentLink(sequelize, DataTypes);
  var WeeeTax = _WeeeTax(sequelize, DataTypes);
  var Widget = _Widget(sequelize, DataTypes);
  var WidgetInstance = _WidgetInstance(sequelize, DataTypes);
  var WidgetInstancePage = _WidgetInstancePage(sequelize, DataTypes);
  var WidgetInstancePageLayout = _WidgetInstancePageLayout(sequelize, DataTypes);
  var Wishlist = _Wishlist(sequelize, DataTypes);
  var WishlistItem = _WishlistItem(sequelize, DataTypes);
  var WishlistItemOption = _WishlistItemOption(sequelize, DataTypes);

  CatalogCategoryEntity.belongsToMany(CatalogProductEntity, { as: 'ProductIdCatalogProductEntities', through: CatalogCategoryProduct, foreignKey: "category_id", otherKey: "product_id" });
  CatalogProductBundleSelection.belongsToMany(StoreWebsite, { as: 'WebsiteIdStoreWebsites', through: CatalogProductBundleSelectionPrice, foreignKey: "selection_id", otherKey: "website_id" });
  CatalogProductEntity.belongsToMany(CatalogCategoryEntity, { as: 'CategoryIdCatalogCategoryEntities', through: CatalogCategoryProduct, foreignKey: "product_id", otherKey: "category_id" });
  CatalogProductEntity.belongsToMany(CatalogProductEntity, { as: 'ChildIdCatalogProductEntities', through: CatalogProductRelation, foreignKey: "parent_id", otherKey: "child_id" });
  CatalogProductEntity.belongsToMany(CatalogProductEntity, { as: 'ParentIdCatalogProductEntities', through: CatalogProductRelation, foreignKey: "child_id", otherKey: "parent_id" });
  CatalogProductEntity.belongsToMany(StoreWebsite, { as: 'WebsiteIdStoreWebsiteCatalogProductWebsites', through: CatalogProductWebsite, foreignKey: "product_id", otherKey: "website_id" });
  CatalogProductEntity.belongsToMany(CatalogProductEntityMediaGallery, { as: 'CatalogProductEntityMediaGallery', through: CatalogProductEntityMediaGalleryValueToEntity, foreignKey: "entity_id", otherKey: "value_id" });
  Catalogrule.belongsToMany(CustomerGroup, { as: 'CustomerGroupIdCustomerGroups', through: CatalogruleCustomerGroup, foreignKey: "rule_id", otherKey: "customer_group_id" });
  Catalogrule.belongsToMany(StoreWebsite, { as: 'WebsiteIdStoreWebsiteCatalogruleWebsites', through: CatalogruleWebsite, foreignKey: "rule_id", otherKey: "website_id" });
  CheckoutAgreement.belongsToMany(Store, { as: 'StoreIdStores', through: CheckoutAgreementStore, foreignKey: "agreement_id", otherKey: "store_id" });
  CmsBlock.belongsToMany(Store, { as: 'StoreIdStoreCmsBlockStores', through: CmsBlockStore, foreignKey: "block_id", otherKey: "store_id" });
  CmsPage.belongsToMany(Store, { as: 'StoreIdStoreCmsPageStores', through: CmsPageStore, foreignKey: "page_id", otherKey: "store_id" });
  CustomerEntity.belongsToMany(SalesruleCoupon, { as: 'CouponIdSalesruleCoupons', through: SalesruleCouponUsage, foreignKey: "customer_id", otherKey: "coupon_id" });
  CustomerGroup.belongsToMany(Catalogrule, { as: 'RuleIdCatalogrules', through: CatalogruleCustomerGroup, foreignKey: "customer_group_id", otherKey: "rule_id" });
  CustomerGroup.belongsToMany(Salesrule, { as: 'RuleIdSalesrules', through: SalesruleCustomerGroup, foreignKey: "customer_group_id", otherKey: "rule_id" });
  EavAttribute.belongsToMany(StoreWebsite, { as: 'WebsiteIdStoreWebsiteCustomerEavAttributeWebsites', through: CustomerEavAttributeWebsite, foreignKey: "attribute_id", otherKey: "website_id" });
  EavEntityType.belongsToMany(EavFormType, { as: 'TypeIdEavFormTypes', through: EavFormTypeEntity, foreignKey: "entity_type_id", otherKey: "type_id" });
  EavFormFieldset.belongsToMany(Store, { as: 'StoreIdStoreEavFormFieldsetLabels', through: EavFormFieldsetLabel, foreignKey: "fieldset_id", otherKey: "store_id" });
  EavFormType.belongsToMany(EavEntityType, { as: 'EntityTypeIdEavEntityTypes', through: EavFormTypeEntity, foreignKey: "type_id", otherKey: "entity_type_id" });
  MediaGalleryAsset.belongsToMany(MediaGalleryKeyword, { as: 'KeywordIdMediaGalleryKeywords', through: MediaGalleryAssetKeyword, foreignKey: "asset_id", otherKey: "keyword_id" });
  MediaGalleryKeyword.belongsToMany(MediaGalleryAsset, { as: 'AssetIdMediaGalleryAssets', through: MediaGalleryAssetKeyword, foreignKey: "keyword_id", otherKey: "asset_id" });
  NewsletterQueue.belongsToMany(Store, { as: 'StoreIdStoreNewsletterQueueStoreLinks', through: NewsletterQueueStoreLink, foreignKey: "queue_id", otherKey: "store_id" });
  PaypalBillingAgreement.belongsToMany(SalesOrder, { as: 'OrderIdSalesOrders', through: PaypalBillingAgreementOrder, foreignKey: "agreement_id", otherKey: "order_id" });
  Rating.belongsToMany(Store, { as: 'StoreIdStoreRatingStores', through: RatingStore, foreignKey: "rating_id", otherKey: "store_id" });
  Rating.belongsToMany(Store, { as: 'StoreIdStoreRatingTitles', through: RatingTitle, foreignKey: "rating_id", otherKey: "store_id" });
  Review.belongsToMany(Store, { as: 'StoreIdStoreReviewStores', through: ReviewStore, foreignKey: "review_id", otherKey: "store_id" });
  SalesOrder.belongsToMany(PaypalBillingAgreement, { as: 'AgreementIdPaypalBillingAgreements', through: PaypalBillingAgreementOrder, foreignKey: "order_id", otherKey: "agreement_id" });
  SalesOrderPayment.belongsToMany(VaultPaymentToken, { as: 'PaymentTokenIdVaultPaymentTokens', through: VaultPaymentTokenOrderPaymentLink, foreignKey: "order_payment_id", otherKey: "payment_token_id" });
  SalesOrderStatus.belongsToMany(Store, { as: 'StoreIdStoreSalesOrderStatusLabels', through: SalesOrderStatusLabel, foreignKey: "status", otherKey: "store_id" });
  Salesrule.belongsToMany(CustomerGroup, { as: 'CustomerGroupIdCustomerGroupSalesruleCustomerGroups', through: SalesruleCustomerGroup, foreignKey: "rule_id", otherKey: "customer_group_id" });
  Salesrule.belongsToMany(StoreWebsite, { as: 'WebsiteIdStoreWebsiteSalesruleWebsites', through: SalesruleWebsite, foreignKey: "rule_id", otherKey: "website_id" });
  SalesruleCoupon.belongsToMany(CustomerEntity, { as: 'CustomerIdCustomerEntities', through: SalesruleCouponUsage, foreignKey: "coupon_id", otherKey: "customer_id" });
  Store.belongsToMany(CheckoutAgreement, { as: 'AgreementIdCheckoutAgreements', through: CheckoutAgreementStore, foreignKey: "store_id", otherKey: "agreement_id" });
  Store.belongsToMany(CmsBlock, { as: 'BlockIdCmsBlocks', through: CmsBlockStore, foreignKey: "store_id", otherKey: "block_id" });
  Store.belongsToMany(CmsPage, { as: 'PageIdCmsPages', through: CmsPageStore, foreignKey: "store_id", otherKey: "page_id" });
  Store.belongsToMany(EavFormFieldset, { as: 'FieldsetIdEavFormFieldsets', through: EavFormFieldsetLabel, foreignKey: "store_id", otherKey: "fieldset_id" });
  Store.belongsToMany(NewsletterQueue, { as: 'QueueIdNewsletterQueues', through: NewsletterQueueStoreLink, foreignKey: "store_id", otherKey: "queue_id" });
  Store.belongsToMany(Rating, { as: 'RatingIdRatings', through: RatingStore, foreignKey: "store_id", otherKey: "rating_id" });
  Store.belongsToMany(Rating, { as: 'RatingIdRatingRatingTitles', through: RatingTitle, foreignKey: "store_id", otherKey: "rating_id" });
  Store.belongsToMany(Review, { as: 'ReviewIdReviews', through: ReviewStore, foreignKey: "store_id", otherKey: "review_id" });
  Store.belongsToMany(SalesOrderStatus, { as: 'StatusSalesOrderStatuses', through: SalesOrderStatusLabel, foreignKey: "store_id", otherKey: "status" });
  StoreWebsite.belongsToMany(CatalogProductBundleSelection, { as: 'SelectionIdCatalogProductBundleSelections', through: CatalogProductBundleSelectionPrice, foreignKey: "website_id", otherKey: "selection_id" });
  StoreWebsite.belongsToMany(CatalogProductEntity, { as: 'ProductIdCatalogProductEntityCatalogProductWebsites', through: CatalogProductWebsite, foreignKey: "website_id", otherKey: "product_id" });
  StoreWebsite.belongsToMany(Catalogrule, { as: 'RuleIdCatalogruleCatalogruleWebsites', through: CatalogruleWebsite, foreignKey: "website_id", otherKey: "rule_id" });
  StoreWebsite.belongsToMany(EavAttribute, { as: 'AttributeIdEavAttributes', through: CustomerEavAttributeWebsite, foreignKey: "website_id", otherKey: "attribute_id" });
  StoreWebsite.belongsToMany(Salesrule, { as: 'RuleIdSalesruleSalesruleWebsites', through: SalesruleWebsite, foreignKey: "website_id", otherKey: "rule_id" });
  VaultPaymentToken.belongsToMany(SalesOrderPayment, { as: 'OrderPaymentIdSalesOrderPayments', through: VaultPaymentTokenOrderPaymentLink, foreignKey: "payment_token_id", otherKey: "order_payment_id" });
  AdminPasswords.belongsTo(AdminUser, { as: "User", foreignKey: "user_id"});
  AdminUser.hasMany(AdminPasswords, { as: "AdminPasswords", foreignKey: "user_id"});
  AdminUserExpiration.belongsTo(AdminUser, { as: "User", foreignKey: "user_id"});
  AdminUser.hasOne(AdminUserExpiration, { as: "AdminUserExpiration", foreignKey: "user_id"});
  AdminUserSession.belongsTo(AdminUser, { as: "User", foreignKey: "user_id"});
  AdminUser.hasMany(AdminUserSession, { as: "AdminUserSessions", foreignKey: "user_id"});
  OauthToken.belongsTo(AdminUser, { as: "Admin", foreignKey: "admin_id"});
  AdminUser.hasMany(OauthToken, { as: "OauthTokens", foreignKey: "admin_id"});
  ReleaseNotificationViewerLog.belongsTo(AdminUser, { as: "Viewer", foreignKey: "viewer_id"});
  AdminUser.hasOne(ReleaseNotificationViewerLog, { as: "ReleaseNotificationViewerLog", foreignKey: "viewer_id"});
  UiBookmark.belongsTo(AdminUser, { as: "User", foreignKey: "user_id"});
  AdminUser.hasMany(UiBookmark, { as: "UiBookmarks", foreignKey: "user_id"});
  AuthorizationRule.belongsTo(AuthorizationRole, { as: "Role", foreignKey: "role_id"});
  AuthorizationRole.hasMany(AuthorizationRule, { as: "AuthorizationRules", foreignKey: "role_id"});
  CatalogCategoryEntityDatetime.belongsTo(CatalogCategoryEntity, { as: "Entity", foreignKey: "entity_id"});
  CatalogCategoryEntity.hasMany(CatalogCategoryEntityDatetime, { as: "CatalogCategoryEntityDatetimes", foreignKey: "entity_id"});
  CatalogCategoryEntityDecimal.belongsTo(CatalogCategoryEntity, { as: "Entity", foreignKey: "entity_id"});
  CatalogCategoryEntity.hasMany(CatalogCategoryEntityDecimal, { as: "CatalogCategoryEntityDecimals", foreignKey: "entity_id"});
  CatalogCategoryEntityInt.belongsTo(CatalogCategoryEntity, { as: "Entity", foreignKey: "entity_id"});
  CatalogCategoryEntity.hasMany(CatalogCategoryEntityInt, { as: "CatalogCategoryEntityInts", foreignKey: "entity_id"});
  CatalogCategoryEntityText.belongsTo(CatalogCategoryEntity, { as: "Entity", foreignKey: "entity_id"});
  CatalogCategoryEntity.hasMany(CatalogCategoryEntityText, { as: "CatalogCategoryEntityTexts", foreignKey: "entity_id"});
  CatalogCategoryEntityVarchar.belongsTo(CatalogCategoryEntity, { as: "Entity", foreignKey: "entity_id"});
  CatalogCategoryEntity.hasMany(CatalogCategoryEntityVarchar, { as: "CatalogCategoryEntityVarchars", foreignKey: "entity_id"});
  CatalogCategoryProduct.belongsTo(CatalogCategoryEntity, { as: "Category", foreignKey: "category_id"});
  CatalogCategoryEntity.hasMany(CatalogCategoryProduct, { as: "CatalogCategoryProducts", foreignKey: "category_id"});
  CatalogUrlRewriteProductCategory.belongsTo(CatalogCategoryEntity, { as: "Category", foreignKey: "category_id"});
  CatalogCategoryEntity.hasMany(CatalogUrlRewriteProductCategory, { as: "CatalogUrlRewriteProductCategories", foreignKey: "category_id"});
  CatalogCompareItem.belongsTo(CatalogCompareList, { as: "List", foreignKey: "list_id"});
  CatalogCompareList.hasMany(CatalogCompareItem, { as: "CatalogCompareItems", foreignKey: "list_id"});
  CatalogProductBundleOptionValue.belongsTo(CatalogProductBundleOption, { as: "Option", foreignKey: "option_id"});
  CatalogProductBundleOption.hasMany(CatalogProductBundleOptionValue, { as: "CatalogProductBundleOptionValues", foreignKey: "option_id"});
  CatalogProductBundleSelection.belongsTo(CatalogProductBundleOption, { as: "Option", foreignKey: "option_id"});
  CatalogProductBundleOption.hasMany(CatalogProductBundleSelection, { as: "CatalogProductBundleSelections", foreignKey: "option_id"});
  CatalogProductBundleSelectionPrice.belongsTo(CatalogProductBundleSelection, { as: "Selection", foreignKey: "selection_id"});
  CatalogProductBundleSelection.hasMany(CatalogProductBundleSelectionPrice, { as: "CatalogProductBundleSelectionPrices", foreignKey: "selection_id"});
  CatalogCategoryProduct.belongsTo(CatalogProductEntity, { as: "Product", foreignKey: "product_id"});
  CatalogProductEntity.hasMany(CatalogCategoryProduct, { as: "CatalogCategoryProducts", foreignKey: "product_id"});
  CatalogCompareItem.belongsTo(CatalogProductEntity, { as: "Product", foreignKey: "product_id"});
  CatalogProductEntity.hasMany(CatalogCompareItem, { as: "CatalogCompareItems", foreignKey: "product_id"});
  CatalogProductBundleOption.belongsTo(CatalogProductEntity, { as: "Parent", foreignKey: "parent_id"});
  CatalogProductEntity.hasMany(CatalogProductBundleOption, { as: "CatalogProductBundleOptions", foreignKey: "parent_id"});
  CatalogProductBundlePriceIndex.belongsTo(CatalogProductEntity, { as: "Entity", foreignKey: "entity_id"});
  CatalogProductEntity.hasMany(CatalogProductBundlePriceIndex, { as: "CatalogProductBundlePriceIndices", foreignKey: "entity_id"});
  CatalogProductBundleSelection.belongsTo(CatalogProductEntity, { as: "Product", foreignKey: "product_id"});
  CatalogProductEntity.hasMany(CatalogProductBundleSelection, { as: "CatalogProductBundleSelections", foreignKey: "product_id"});
  CatalogProductEntityDatetime.belongsTo(CatalogProductEntity, { as: "Entity", foreignKey: "entity_id"});
  CatalogProductEntity.hasMany(CatalogProductEntityDatetime, { as: "CatalogProductEntityDatetimes", foreignKey: "entity_id"});
  CatalogProductEntityDecimal.belongsTo(CatalogProductEntity, { as: "Entity", foreignKey: "entity_id"});
  CatalogProductEntity.hasMany(CatalogProductEntityDecimal, { as: "CatalogProductEntityDecimals", foreignKey: "entity_id"});
  CatalogProductEntityGallery.belongsTo(CatalogProductEntity, { as: "Entity", foreignKey: "entity_id"});
  CatalogProductEntity.hasMany(CatalogProductEntityGallery, { as: "CatalogProductEntityGalleries", foreignKey: "entity_id"});
  CatalogProductEntityInt.belongsTo(CatalogProductEntity, { as: "Entity", foreignKey: "entity_id"});
  CatalogProductEntity.hasMany(CatalogProductEntityInt, { as: "CatalogProductEntityInts", foreignKey: "entity_id"});
  CatalogProductEntityMediaGalleryValue.belongsTo(CatalogProductEntity, { as: "Entity", foreignKey: "entity_id"});
  CatalogProductEntity.hasMany(CatalogProductEntityMediaGalleryValue, { as: "CatalogProductEntityMediaGalleryValues", foreignKey: "entity_id"});
  CatalogProductEntityMediaGalleryValueToEntity.belongsTo(CatalogProductEntity, { as: "Entity", foreignKey: "entity_id"});
  CatalogProductEntity.hasMany(CatalogProductEntityMediaGalleryValueToEntity, { as: "CatalogProductEntityMediaGalleryValueToEntities", foreignKey: "entity_id"});
  CatalogProductEntityText.belongsTo(CatalogProductEntity, { as: "Entity", foreignKey: "entity_id"});
  CatalogProductEntity.hasMany(CatalogProductEntityText, { as: "CatalogProductEntityTexts", foreignKey: "entity_id"});
  CatalogProductEntityTierPrice.belongsTo(CatalogProductEntity, { as: "Entity", foreignKey: "entity_id"});
  CatalogProductEntity.hasMany(CatalogProductEntityTierPrice, { as: "CatalogProductEntityTierPrices", foreignKey: "entity_id"});
  CatalogProductEntityVarchar.belongsTo(CatalogProductEntity, { as: "Entity", foreignKey: "entity_id"});
  CatalogProductEntity.hasMany(CatalogProductEntityVarchar, { as: "CatalogProductEntityVarchars", foreignKey: "entity_id"});
  CatalogProductFrontendAction.belongsTo(CatalogProductEntity, { as: "Product", foreignKey: "product_id"});
  CatalogProductEntity.hasMany(CatalogProductFrontendAction, { as: "CatalogProductFrontendActions", foreignKey: "product_id"});
  CatalogProductIndexTierPrice.belongsTo(CatalogProductEntity, { as: "Entity", foreignKey: "entity_id"});
  CatalogProductEntity.hasMany(CatalogProductIndexTierPrice, { as: "CatalogProductIndexTierPrices", foreignKey: "entity_id"});
  CatalogProductLink.belongsTo(CatalogProductEntity, { as: "Product", foreignKey: "product_id"});
  CatalogProductEntity.hasMany(CatalogProductLink, { as: "CatalogProductLinks", foreignKey: "product_id"});
  CatalogProductLink.belongsTo(CatalogProductEntity, { as: "LinkedProduct", foreignKey: "linked_product_id"});
  CatalogProductEntity.hasMany(CatalogProductLink, { as: "LinkedProductCatalogProductLinks", foreignKey: "linked_product_id"});
  CatalogProductOption.belongsTo(CatalogProductEntity, { as: "Product", foreignKey: "product_id"});
  CatalogProductEntity.hasMany(CatalogProductOption, { as: "CatalogProductOptions", foreignKey: "product_id"});
  CatalogProductRelation.belongsTo(CatalogProductEntity, { as: "Parent", foreignKey: "parent_id"});
  CatalogProductEntity.hasMany(CatalogProductRelation, { as: "CatalogProductRelations", foreignKey: "parent_id"});
  CatalogProductRelation.belongsTo(CatalogProductEntity, { as: "Child", foreignKey: "child_id"});
  CatalogProductEntity.hasMany(CatalogProductRelation, { as: "ChildCatalogProductRelations", foreignKey: "child_id"});
  CatalogProductSuperAttribute.belongsTo(CatalogProductEntity, { as: "Product", foreignKey: "product_id"});
  CatalogProductEntity.hasMany(CatalogProductSuperAttribute, { as: "CatalogProductSuperAttributes", foreignKey: "product_id"});
  CatalogProductSuperLink.belongsTo(CatalogProductEntity, { as: "Product", foreignKey: "product_id"});
  CatalogProductEntity.hasMany(CatalogProductSuperLink, { as: "CatalogProductSuperLinks", foreignKey: "product_id"});
  CatalogProductSuperLink.belongsTo(CatalogProductEntity, { as: "Parent", foreignKey: "parent_id"});
  CatalogProductEntity.hasMany(CatalogProductSuperLink, { as: "ParentCatalogProductSuperLinks", foreignKey: "parent_id"});
  CatalogProductWebsite.belongsTo(CatalogProductEntity, { as: "Product", foreignKey: "product_id"});
  CatalogProductEntity.hasMany(CatalogProductWebsite, { as: "CatalogProductWebsites", foreignKey: "product_id"});
  CatalogUrlRewriteProductCategory.belongsTo(CatalogProductEntity, { as: "Product", foreignKey: "product_id"});
  CatalogProductEntity.hasMany(CatalogUrlRewriteProductCategory, { as: "CatalogUrlRewriteProductCategories", foreignKey: "product_id"});
  CataloginventoryStockItem.belongsTo(CatalogProductEntity, { as: "Product", foreignKey: "product_id"});
  CatalogProductEntity.hasMany(CataloginventoryStockItem, { as: "CataloginventoryStockItems", foreignKey: "product_id"});
  DownloadableLink.belongsTo(CatalogProductEntity, { as: "Product", foreignKey: "product_id"});
  CatalogProductEntity.hasMany(DownloadableLink, { as: "DownloadableLinks", foreignKey: "product_id"});
  DownloadableSample.belongsTo(CatalogProductEntity, { as: "Product", foreignKey: "product_id"});
  CatalogProductEntity.hasMany(DownloadableSample, { as: "DownloadableSamples", foreignKey: "product_id"});
  ProductAlertPrice.belongsTo(CatalogProductEntity, { as: "Product", foreignKey: "product_id"});
  CatalogProductEntity.hasMany(ProductAlertPrice, { as: "ProductAlertPrices", foreignKey: "product_id"});
  ProductAlertStock.belongsTo(CatalogProductEntity, { as: "Product", foreignKey: "product_id"});
  CatalogProductEntity.hasMany(ProductAlertStock, { as: "ProductAlertStocks", foreignKey: "product_id"});
  ReportComparedProductIndex.belongsTo(CatalogProductEntity, { as: "Product", foreignKey: "product_id"});
  CatalogProductEntity.hasMany(ReportComparedProductIndex, { as: "ReportComparedProductIndices", foreignKey: "product_id"});
  ReportViewedProductAggregatedDaily.belongsTo(CatalogProductEntity, { as: "Product", foreignKey: "product_id"});
  CatalogProductEntity.hasMany(ReportViewedProductAggregatedDaily, { as: "ReportViewedProductAggregatedDailies", foreignKey: "product_id"});
  ReportViewedProductAggregatedMonthly.belongsTo(CatalogProductEntity, { as: "Product", foreignKey: "product_id"});
  CatalogProductEntity.hasMany(ReportViewedProductAggregatedMonthly, { as: "ReportViewedProductAggregatedMonthlies", foreignKey: "product_id"});
  ReportViewedProductAggregatedYearly.belongsTo(CatalogProductEntity, { as: "Product", foreignKey: "product_id"});
  CatalogProductEntity.hasMany(ReportViewedProductAggregatedYearly, { as: "ReportViewedProductAggregatedYearlies", foreignKey: "product_id"});
  ReportViewedProductIndex.belongsTo(CatalogProductEntity, { as: "Product", foreignKey: "product_id"});
  CatalogProductEntity.hasMany(ReportViewedProductIndex, { as: "ReportViewedProductIndices", foreignKey: "product_id"});
  WeeeTax.belongsTo(CatalogProductEntity, { as: "Entity", foreignKey: "entity_id"});
  CatalogProductEntity.hasMany(WeeeTax, { as: "WeeeTaxes", foreignKey: "entity_id"});
  WishlistItem.belongsTo(CatalogProductEntity, { as: "Product", foreignKey: "product_id"});
  CatalogProductEntity.hasMany(WishlistItem, { as: "WishlistItems", foreignKey: "product_id"});
  CatalogProductEntityMediaGalleryValue.belongsTo(CatalogProductEntityMediaGallery, { as: "Value", foreignKey: "value_id"});
  CatalogProductEntityMediaGallery.hasMany(CatalogProductEntityMediaGalleryValue, { as: "CatalogProductEntityMediaGalleryValues", foreignKey: "value_id"});
  CatalogProductEntityMediaGalleryValueToEntity.belongsTo(CatalogProductEntityMediaGallery, { as: "Value", foreignKey: "value_id"});
  CatalogProductEntityMediaGallery.hasMany(CatalogProductEntityMediaGalleryValueToEntity, { as: "CatalogProductEntityMediaGalleryValueToEntities", foreignKey: "value_id"});
  CatalogProductEntityMediaGalleryValueVideo.belongsTo(CatalogProductEntityMediaGallery, { as: "Value", foreignKey: "value_id"});
  CatalogProductEntityMediaGallery.hasMany(CatalogProductEntityMediaGalleryValueVideo, { as: "CatalogProductEntityMediaGalleryValueVideos", foreignKey: "value_id"});
  CatalogProductLinkAttributeDecimal.belongsTo(CatalogProductLink, { as: "Link", foreignKey: "link_id"});
  CatalogProductLink.hasMany(CatalogProductLinkAttributeDecimal, { as: "CatalogProductLinkAttributeDecimals", foreignKey: "link_id"});
  CatalogProductLinkAttributeInt.belongsTo(CatalogProductLink, { as: "Link", foreignKey: "link_id"});
  CatalogProductLink.hasMany(CatalogProductLinkAttributeInt, { as: "CatalogProductLinkAttributeInts", foreignKey: "link_id"});
  CatalogProductLinkAttributeVarchar.belongsTo(CatalogProductLink, { as: "Link", foreignKey: "link_id"});
  CatalogProductLink.hasMany(CatalogProductLinkAttributeVarchar, { as: "CatalogProductLinkAttributeVarchars", foreignKey: "link_id"});
  CatalogProductLinkAttributeDecimal.belongsTo(CatalogProductLinkAttribute, { as: "ProductLinkAttribute", foreignKey: "product_link_attribute_id"});
  CatalogProductLinkAttribute.hasMany(CatalogProductLinkAttributeDecimal, { as: "CatalogProductLinkAttributeDecimals", foreignKey: "product_link_attribute_id"});
  CatalogProductLinkAttributeInt.belongsTo(CatalogProductLinkAttribute, { as: "ProductLinkAttribute", foreignKey: "product_link_attribute_id"});
  CatalogProductLinkAttribute.hasMany(CatalogProductLinkAttributeInt, { as: "CatalogProductLinkAttributeInts", foreignKey: "product_link_attribute_id"});
  CatalogProductLinkAttributeVarchar.belongsTo(CatalogProductLinkAttribute, { as: "ProductLinkAttribute", foreignKey: "product_link_attribute_id"});
  CatalogProductLinkAttribute.hasMany(CatalogProductLinkAttributeVarchar, { as: "CatalogProductLinkAttributeVarchars", foreignKey: "product_link_attribute_id"});
  CatalogProductLink.belongsTo(CatalogProductLinkType, { as: "LinkType", foreignKey: "link_type_id"});
  CatalogProductLinkType.hasMany(CatalogProductLink, { as: "CatalogProductLinks", foreignKey: "link_type_id"});
  CatalogProductLinkAttribute.belongsTo(CatalogProductLinkType, { as: "LinkType", foreignKey: "link_type_id"});
  CatalogProductLinkType.hasMany(CatalogProductLinkAttribute, { as: "CatalogProductLinkAttributes", foreignKey: "link_type_id"});
  CatalogProductOptionPrice.belongsTo(CatalogProductOption, { as: "Option", foreignKey: "option_id"});
  CatalogProductOption.hasMany(CatalogProductOptionPrice, { as: "CatalogProductOptionPrices", foreignKey: "option_id"});
  CatalogProductOptionTitle.belongsTo(CatalogProductOption, { as: "Option", foreignKey: "option_id"});
  CatalogProductOption.hasMany(CatalogProductOptionTitle, { as: "CatalogProductOptionTitles", foreignKey: "option_id"});
  CatalogProductOptionTypeValue.belongsTo(CatalogProductOption, { as: "Option", foreignKey: "option_id"});
  CatalogProductOption.hasMany(CatalogProductOptionTypeValue, { as: "CatalogProductOptionTypeValues", foreignKey: "option_id"});
  CatalogProductOptionTypePrice.belongsTo(CatalogProductOptionTypeValue, { as: "OptionType", foreignKey: "option_type_id"});
  CatalogProductOptionTypeValue.hasMany(CatalogProductOptionTypePrice, { as: "CatalogProductOptionTypePrices", foreignKey: "option_type_id"});
  CatalogProductOptionTypeTitle.belongsTo(CatalogProductOptionTypeValue, { as: "OptionType", foreignKey: "option_type_id"});
  CatalogProductOptionTypeValue.hasMany(CatalogProductOptionTypeTitle, { as: "CatalogProductOptionTypeTitles", foreignKey: "option_type_id"});
  CatalogProductSuperAttributeLabel.belongsTo(CatalogProductSuperAttribute, { as: "ProductSuperAttribute", foreignKey: "product_super_attribute_id"});
  CatalogProductSuperAttribute.hasMany(CatalogProductSuperAttributeLabel, { as: "CatalogProductSuperAttributeLabels", foreignKey: "product_super_attribute_id"});
  CataloginventoryStockItem.belongsTo(CataloginventoryStock, { as: "Stock", foreignKey: "stock_id"});
  CataloginventoryStock.hasMany(CataloginventoryStockItem, { as: "CataloginventoryStockItems", foreignKey: "stock_id"});
  CatalogruleCustomerGroup.belongsTo(Catalogrule, { as: "Rule", foreignKey: "rule_id"});
  Catalogrule.hasMany(CatalogruleCustomerGroup, { as: "CatalogruleCustomerGroups", foreignKey: "rule_id"});
  CatalogruleWebsite.belongsTo(Catalogrule, { as: "Rule", foreignKey: "rule_id"});
  Catalogrule.hasMany(CatalogruleWebsite, { as: "CatalogruleWebsites", foreignKey: "rule_id"});
  CheckoutAgreementStore.belongsTo(CheckoutAgreement, { as: "Agreement", foreignKey: "agreement_id"});
  CheckoutAgreement.hasMany(CheckoutAgreementStore, { as: "CheckoutAgreementStores", foreignKey: "agreement_id"});
  CmsBlockStore.belongsTo(CmsBlock, { as: "Block", foreignKey: "block_id"});
  CmsBlock.hasMany(CmsBlockStore, { as: "CmsBlockStores", foreignKey: "block_id"});
  CmsPageStore.belongsTo(CmsPage, { as: "Page", foreignKey: "page_id"});
  CmsPage.hasMany(CmsPageStore, { as: "CmsPageStores", foreignKey: "page_id"});
  CustomerAddressEntityDatetime.belongsTo(CustomerAddressEntity, { as: "Entity", foreignKey: "entity_id"});
  CustomerAddressEntity.hasMany(CustomerAddressEntityDatetime, { as: "CustomerAddressEntityDatetimes", foreignKey: "entity_id"});
  CustomerAddressEntityDecimal.belongsTo(CustomerAddressEntity, { as: "Entity", foreignKey: "entity_id"});
  CustomerAddressEntity.hasMany(CustomerAddressEntityDecimal, { as: "CustomerAddressEntityDecimals", foreignKey: "entity_id"});
  CustomerAddressEntityInt.belongsTo(CustomerAddressEntity, { as: "Entity", foreignKey: "entity_id"});
  CustomerAddressEntity.hasMany(CustomerAddressEntityInt, { as: "CustomerAddressEntityInts", foreignKey: "entity_id"});
  CustomerAddressEntityText.belongsTo(CustomerAddressEntity, { as: "Entity", foreignKey: "entity_id"});
  CustomerAddressEntity.hasMany(CustomerAddressEntityText, { as: "CustomerAddressEntityTexts", foreignKey: "entity_id"});
  CustomerAddressEntityVarchar.belongsTo(CustomerAddressEntity, { as: "Entity", foreignKey: "entity_id"});
  CustomerAddressEntity.hasMany(CustomerAddressEntityVarchar, { as: "CustomerAddressEntityVarchars", foreignKey: "entity_id"});
  CatalogCompareItem.belongsTo(CustomerEntity, { as: "Customer", foreignKey: "customer_id"});
  CustomerEntity.hasMany(CatalogCompareItem, { as: "CatalogCompareItems", foreignKey: "customer_id"});
  CatalogCompareList.belongsTo(CustomerEntity, { as: "Customer", foreignKey: "customer_id"});
  CustomerEntity.hasOne(CatalogCompareList, { as: "CatalogCompareList", foreignKey: "customer_id"});
  CatalogProductFrontendAction.belongsTo(CustomerEntity, { as: "Customer", foreignKey: "customer_id"});
  CustomerEntity.hasMany(CatalogProductFrontendAction, { as: "CatalogProductFrontendActions", foreignKey: "customer_id"});
  CustomerAddressEntity.belongsTo(CustomerEntity, { as: "Parent", foreignKey: "parent_id"});
  CustomerEntity.hasMany(CustomerAddressEntity, { as: "CustomerAddressEntities", foreignKey: "parent_id"});
  CustomerEntityDatetime.belongsTo(CustomerEntity, { as: "Entity", foreignKey: "entity_id"});
  CustomerEntity.hasMany(CustomerEntityDatetime, { as: "CustomerEntityDatetimes", foreignKey: "entity_id"});
  CustomerEntityDecimal.belongsTo(CustomerEntity, { as: "Entity", foreignKey: "entity_id"});
  CustomerEntity.hasMany(CustomerEntityDecimal, { as: "CustomerEntityDecimals", foreignKey: "entity_id"});
  CustomerEntityInt.belongsTo(CustomerEntity, { as: "Entity", foreignKey: "entity_id"});
  CustomerEntity.hasMany(CustomerEntityInt, { as: "CustomerEntityInts", foreignKey: "entity_id"});
  CustomerEntityText.belongsTo(CustomerEntity, { as: "Entity", foreignKey: "entity_id"});
  CustomerEntity.hasMany(CustomerEntityText, { as: "CustomerEntityTexts", foreignKey: "entity_id"});
  CustomerEntityVarchar.belongsTo(CustomerEntity, { as: "Entity", foreignKey: "entity_id"});
  CustomerEntity.hasMany(CustomerEntityVarchar, { as: "CustomerEntityVarchars", foreignKey: "entity_id"});
  DownloadableLinkPurchased.belongsTo(CustomerEntity, { as: "Customer", foreignKey: "customer_id"});
  CustomerEntity.hasMany(DownloadableLinkPurchased, { as: "DownloadableLinkPurchaseds", foreignKey: "customer_id"});
  LoginAsCustomerAssistanceAllowed.belongsTo(CustomerEntity, { as: "Customer", foreignKey: "customer_id"});
  CustomerEntity.hasMany(LoginAsCustomerAssistanceAllowed, { as: "LoginAsCustomerAssistanceAlloweds", foreignKey: "customer_id"});
  OauthToken.belongsTo(CustomerEntity, { as: "Customer", foreignKey: "customer_id"});
  CustomerEntity.hasMany(OauthToken, { as: "OauthTokens", foreignKey: "customer_id"});
  PaypalBillingAgreement.belongsTo(CustomerEntity, { as: "Customer", foreignKey: "customer_id"});
  CustomerEntity.hasMany(PaypalBillingAgreement, { as: "PaypalBillingAgreements", foreignKey: "customer_id"});
  PersistentSession.belongsTo(CustomerEntity, { as: "Customer", foreignKey: "customer_id"});
  CustomerEntity.hasOne(PersistentSession, { as: "PersistentSession", foreignKey: "customer_id"});
  ProductAlertPrice.belongsTo(CustomerEntity, { as: "Customer", foreignKey: "customer_id"});
  CustomerEntity.hasMany(ProductAlertPrice, { as: "ProductAlertPrices", foreignKey: "customer_id"});
  ProductAlertStock.belongsTo(CustomerEntity, { as: "Customer", foreignKey: "customer_id"});
  CustomerEntity.hasMany(ProductAlertStock, { as: "ProductAlertStocks", foreignKey: "customer_id"});
  ReportComparedProductIndex.belongsTo(CustomerEntity, { as: "Customer", foreignKey: "customer_id"});
  CustomerEntity.hasMany(ReportComparedProductIndex, { as: "ReportComparedProductIndices", foreignKey: "customer_id"});
  ReportViewedProductIndex.belongsTo(CustomerEntity, { as: "Customer", foreignKey: "customer_id"});
  CustomerEntity.hasMany(ReportViewedProductIndex, { as: "ReportViewedProductIndices", foreignKey: "customer_id"});
  ReviewDetail.belongsTo(CustomerEntity, { as: "Customer", foreignKey: "customer_id"});
  CustomerEntity.hasMany(ReviewDetail, { as: "ReviewDetails", foreignKey: "customer_id"});
  SalesOrder.belongsTo(CustomerEntity, { as: "Customer", foreignKey: "customer_id"});
  CustomerEntity.hasMany(SalesOrder, { as: "SalesOrders", foreignKey: "customer_id"});
  SalesruleCouponUsage.belongsTo(CustomerEntity, { as: "Customer", foreignKey: "customer_id"});
  CustomerEntity.hasMany(SalesruleCouponUsage, { as: "SalesruleCouponUsages", foreignKey: "customer_id"});
  SalesruleCustomer.belongsTo(CustomerEntity, { as: "Customer", foreignKey: "customer_id"});
  CustomerEntity.hasMany(SalesruleCustomer, { as: "SalesruleCustomers", foreignKey: "customer_id"});
  VaultPaymentToken.belongsTo(CustomerEntity, { as: "Customer", foreignKey: "customer_id"});
  CustomerEntity.hasMany(VaultPaymentToken, { as: "VaultPaymentTokens", foreignKey: "customer_id"});
  Wishlist.belongsTo(CustomerEntity, { as: "Customer", foreignKey: "customer_id"});
  CustomerEntity.hasOne(Wishlist, { as: "Wishlist", foreignKey: "customer_id"});
  CatalogProductBundlePriceIndex.belongsTo(CustomerGroup, { as: "CustomerGroup", foreignKey: "customer_group_id"});
  CustomerGroup.hasMany(CatalogProductBundlePriceIndex, { as: "CatalogProductBundlePriceIndices", foreignKey: "customer_group_id"});
  CatalogProductEntityTierPrice.belongsTo(CustomerGroup, { as: "CustomerGroup", foreignKey: "customer_group_id"});
  CustomerGroup.hasMany(CatalogProductEntityTierPrice, { as: "CatalogProductEntityTierPrices", foreignKey: "customer_group_id"});
  CatalogProductIndexTierPrice.belongsTo(CustomerGroup, { as: "CustomerGroup", foreignKey: "customer_group_id"});
  CustomerGroup.hasMany(CatalogProductIndexTierPrice, { as: "CatalogProductIndexTierPrices", foreignKey: "customer_group_id"});
  CatalogruleCustomerGroup.belongsTo(CustomerGroup, { as: "CustomerGroup", foreignKey: "customer_group_id"});
  CustomerGroup.hasMany(CatalogruleCustomerGroup, { as: "CatalogruleCustomerGroups", foreignKey: "customer_group_id"});
  SalesruleCustomerGroup.belongsTo(CustomerGroup, { as: "CustomerGroup", foreignKey: "customer_group_id"});
  CustomerGroup.hasMany(SalesruleCustomerGroup, { as: "SalesruleCustomerGroups", foreignKey: "customer_group_id"});
  SalesruleProductAttribute.belongsTo(CustomerGroup, { as: "CustomerGroup", foreignKey: "customer_group_id"});
  CustomerGroup.hasMany(SalesruleProductAttribute, { as: "SalesruleProductAttributes", foreignKey: "customer_group_id"});
  WeeeTax.belongsTo(DirectoryCountry, { as: "CountryDirectoryCountry", foreignKey: "country"});
  DirectoryCountry.hasMany(WeeeTax, { as: "WeeeTaxes", foreignKey: "country"});
  DirectoryCountryRegionName.belongsTo(DirectoryCountryRegion, { as: "Region", foreignKey: "region_id"});
  DirectoryCountryRegion.hasMany(DirectoryCountryRegionName, { as: "DirectoryCountryRegionNames", foreignKey: "region_id"});
  DownloadableLinkPrice.belongsTo(DownloadableLink, { as: "Link", foreignKey: "link_id"});
  DownloadableLink.hasMany(DownloadableLinkPrice, { as: "DownloadableLinkPrices", foreignKey: "link_id"});
  DownloadableLinkTitle.belongsTo(DownloadableLink, { as: "Link", foreignKey: "link_id"});
  DownloadableLink.hasMany(DownloadableLinkTitle, { as: "DownloadableLinkTitles", foreignKey: "link_id"});
  DownloadableLinkPurchasedItem.belongsTo(DownloadableLinkPurchased, { as: "Purchased", foreignKey: "purchased_id"});
  DownloadableLinkPurchased.hasMany(DownloadableLinkPurchasedItem, { as: "DownloadableLinkPurchasedItems", foreignKey: "purchased_id"});
  DownloadableSampleTitle.belongsTo(DownloadableSample, { as: "Sample", foreignKey: "sample_id"});
  DownloadableSample.hasMany(DownloadableSampleTitle, { as: "DownloadableSampleTitles", foreignKey: "sample_id"});
  CatalogCategoryEntityDatetime.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasMany(CatalogCategoryEntityDatetime, { as: "CatalogCategoryEntityDatetimes", foreignKey: "attribute_id"});
  CatalogCategoryEntityDecimal.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasMany(CatalogCategoryEntityDecimal, { as: "CatalogCategoryEntityDecimals", foreignKey: "attribute_id"});
  CatalogCategoryEntityInt.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasMany(CatalogCategoryEntityInt, { as: "CatalogCategoryEntityInts", foreignKey: "attribute_id"});
  CatalogCategoryEntityText.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasMany(CatalogCategoryEntityText, { as: "CatalogCategoryEntityTexts", foreignKey: "attribute_id"});
  CatalogCategoryEntityVarchar.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasMany(CatalogCategoryEntityVarchar, { as: "CatalogCategoryEntityVarchars", foreignKey: "attribute_id"});
  CatalogEavAttribute.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasOne(CatalogEavAttribute, { as: "CatalogEavAttribute", foreignKey: "attribute_id"});
  CatalogProductEntityDatetime.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasMany(CatalogProductEntityDatetime, { as: "CatalogProductEntityDatetimes", foreignKey: "attribute_id"});
  CatalogProductEntityDecimal.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasMany(CatalogProductEntityDecimal, { as: "CatalogProductEntityDecimals", foreignKey: "attribute_id"});
  CatalogProductEntityGallery.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasMany(CatalogProductEntityGallery, { as: "CatalogProductEntityGalleries", foreignKey: "attribute_id"});
  CatalogProductEntityInt.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasMany(CatalogProductEntityInt, { as: "CatalogProductEntityInts", foreignKey: "attribute_id"});
  CatalogProductEntityMediaGallery.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasMany(CatalogProductEntityMediaGallery, { as: "CatalogProductEntityMediaGalleries", foreignKey: "attribute_id"});
  CatalogProductEntityText.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasMany(CatalogProductEntityText, { as: "CatalogProductEntityTexts", foreignKey: "attribute_id"});
  CatalogProductEntityVarchar.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasMany(CatalogProductEntityVarchar, { as: "CatalogProductEntityVarchars", foreignKey: "attribute_id"});
  CustomerAddressEntityDatetime.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasMany(CustomerAddressEntityDatetime, { as: "CustomerAddressEntityDatetimes", foreignKey: "attribute_id"});
  CustomerAddressEntityDecimal.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasMany(CustomerAddressEntityDecimal, { as: "CustomerAddressEntityDecimals", foreignKey: "attribute_id"});
  CustomerAddressEntityInt.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasMany(CustomerAddressEntityInt, { as: "CustomerAddressEntityInts", foreignKey: "attribute_id"});
  CustomerAddressEntityText.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasMany(CustomerAddressEntityText, { as: "CustomerAddressEntityTexts", foreignKey: "attribute_id"});
  CustomerAddressEntityVarchar.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasMany(CustomerAddressEntityVarchar, { as: "CustomerAddressEntityVarchars", foreignKey: "attribute_id"});
  CustomerEavAttribute.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasOne(CustomerEavAttribute, { as: "CustomerEavAttribute", foreignKey: "attribute_id"});
  CustomerEavAttributeWebsite.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasMany(CustomerEavAttributeWebsite, { as: "CustomerEavAttributeWebsites", foreignKey: "attribute_id"});
  CustomerEntityDatetime.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasMany(CustomerEntityDatetime, { as: "CustomerEntityDatetimes", foreignKey: "attribute_id"});
  CustomerEntityDecimal.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasMany(CustomerEntityDecimal, { as: "CustomerEntityDecimals", foreignKey: "attribute_id"});
  CustomerEntityInt.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasMany(CustomerEntityInt, { as: "CustomerEntityInts", foreignKey: "attribute_id"});
  CustomerEntityText.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasMany(CustomerEntityText, { as: "CustomerEntityTexts", foreignKey: "attribute_id"});
  CustomerEntityVarchar.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasMany(CustomerEntityVarchar, { as: "CustomerEntityVarchars", foreignKey: "attribute_id"});
  CustomerFormAttribute.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasMany(CustomerFormAttribute, { as: "CustomerFormAttributes", foreignKey: "attribute_id"});
  EavAttributeLabel.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasMany(EavAttributeLabel, { as: "EavAttributeLabels", foreignKey: "attribute_id"});
  EavAttributeOption.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasMany(EavAttributeOption, { as: "EavAttributeOptions", foreignKey: "attribute_id"});
  EavEntityAttribute.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasMany(EavEntityAttribute, { as: "EavEntityAttributes", foreignKey: "attribute_id"});
  EavFormElement.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasMany(EavFormElement, { as: "EavFormElements", foreignKey: "attribute_id"});
  SalesruleProductAttribute.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasMany(SalesruleProductAttribute, { as: "SalesruleProductAttributes", foreignKey: "attribute_id"});
  WeeeTax.belongsTo(EavAttribute, { as: "Attribute", foreignKey: "attribute_id"});
  EavAttribute.hasMany(WeeeTax, { as: "WeeeTaxes", foreignKey: "attribute_id"});
  EavEntityAttribute.belongsTo(EavAttributeGroup, { as: "AttributeGroup", foreignKey: "attribute_group_id"});
  EavAttributeGroup.hasMany(EavEntityAttribute, { as: "EavEntityAttributes", foreignKey: "attribute_group_id"});
  EavAttributeOptionSwatch.belongsTo(EavAttributeOption, { as: "Option", foreignKey: "option_id"});
  EavAttributeOption.hasMany(EavAttributeOptionSwatch, { as: "EavAttributeOptionSwatches", foreignKey: "option_id"});
  EavAttributeOptionValue.belongsTo(EavAttributeOption, { as: "Option", foreignKey: "option_id"});
  EavAttributeOption.hasMany(EavAttributeOptionValue, { as: "EavAttributeOptionValues", foreignKey: "option_id"});
  EavAttributeGroup.belongsTo(EavAttributeSet, { as: "AttributeSet", foreignKey: "attribute_set_id"});
  EavAttributeSet.hasMany(EavAttributeGroup, { as: "EavAttributeGroups", foreignKey: "attribute_set_id"});
  EavEntityDatetime.belongsTo(EavEntity, { as: "Entity", foreignKey: "entity_id"});
  EavEntity.hasMany(EavEntityDatetime, { as: "EavEntityDatetimes", foreignKey: "entity_id"});
  EavEntityDecimal.belongsTo(EavEntity, { as: "Entity", foreignKey: "entity_id"});
  EavEntity.hasMany(EavEntityDecimal, { as: "EavEntityDecimals", foreignKey: "entity_id"});
  EavEntityInt.belongsTo(EavEntity, { as: "Entity", foreignKey: "entity_id"});
  EavEntity.hasMany(EavEntityInt, { as: "EavEntityInts", foreignKey: "entity_id"});
  EavEntityText.belongsTo(EavEntity, { as: "Entity", foreignKey: "entity_id"});
  EavEntity.hasMany(EavEntityText, { as: "EavEntityTexts", foreignKey: "entity_id"});
  EavEntityVarchar.belongsTo(EavEntity, { as: "Entity", foreignKey: "entity_id"});
  EavEntity.hasMany(EavEntityVarchar, { as: "EavEntityVarchars", foreignKey: "entity_id"});
  EavAttribute.belongsTo(EavEntityType, { as: "EntityType", foreignKey: "entity_type_id"});
  EavEntityType.hasMany(EavAttribute, { as: "EavAttributes", foreignKey: "entity_type_id"});
  EavAttributeSet.belongsTo(EavEntityType, { as: "EntityType", foreignKey: "entity_type_id"});
  EavEntityType.hasMany(EavAttributeSet, { as: "EavAttributeSets", foreignKey: "entity_type_id"});
  EavEntity.belongsTo(EavEntityType, { as: "EntityType", foreignKey: "entity_type_id"});
  EavEntityType.hasMany(EavEntity, { as: "EavEntities", foreignKey: "entity_type_id"});
  EavEntityDatetime.belongsTo(EavEntityType, { as: "EntityType", foreignKey: "entity_type_id"});
  EavEntityType.hasMany(EavEntityDatetime, { as: "EavEntityDatetimes", foreignKey: "entity_type_id"});
  EavEntityDecimal.belongsTo(EavEntityType, { as: "EntityType", foreignKey: "entity_type_id"});
  EavEntityType.hasMany(EavEntityDecimal, { as: "EavEntityDecimals", foreignKey: "entity_type_id"});
  EavEntityInt.belongsTo(EavEntityType, { as: "EntityType", foreignKey: "entity_type_id"});
  EavEntityType.hasMany(EavEntityInt, { as: "EavEntityInts", foreignKey: "entity_type_id"});
  EavEntityStore.belongsTo(EavEntityType, { as: "EntityType", foreignKey: "entity_type_id"});
  EavEntityType.hasMany(EavEntityStore, { as: "EavEntityStores", foreignKey: "entity_type_id"});
  EavEntityText.belongsTo(EavEntityType, { as: "EntityType", foreignKey: "entity_type_id"});
  EavEntityType.hasMany(EavEntityText, { as: "EavEntityTexts", foreignKey: "entity_type_id"});
  EavEntityVarchar.belongsTo(EavEntityType, { as: "EntityType", foreignKey: "entity_type_id"});
  EavEntityType.hasMany(EavEntityVarchar, { as: "EavEntityVarchars", foreignKey: "entity_type_id"});
  EavFormTypeEntity.belongsTo(EavEntityType, { as: "EntityType", foreignKey: "entity_type_id"});
  EavEntityType.hasMany(EavFormTypeEntity, { as: "EavFormTypeEntities", foreignKey: "entity_type_id"});
  EavFormElement.belongsTo(EavFormFieldset, { as: "Fieldset", foreignKey: "fieldset_id"});
  EavFormFieldset.hasMany(EavFormElement, { as: "EavFormElements", foreignKey: "fieldset_id"});
  EavFormFieldsetLabel.belongsTo(EavFormFieldset, { as: "Fieldset", foreignKey: "fieldset_id"});
  EavFormFieldset.hasMany(EavFormFieldsetLabel, { as: "EavFormFieldsetLabels", foreignKey: "fieldset_id"});
  EavFormElement.belongsTo(EavFormType, { as: "Type", foreignKey: "type_id"});
  EavFormType.hasMany(EavFormElement, { as: "EavFormElements", foreignKey: "type_id"});
  EavFormFieldset.belongsTo(EavFormType, { as: "Type", foreignKey: "type_id"});
  EavFormType.hasMany(EavFormFieldset, { as: "EavFormFieldsets", foreignKey: "type_id"});
  EavFormTypeEntity.belongsTo(EavFormType, { as: "Type", foreignKey: "type_id"});
  EavFormType.hasMany(EavFormTypeEntity, { as: "EavFormTypeEntities", foreignKey: "type_id"});
  LayoutLink.belongsTo(LayoutUpdate, { as: "LayoutUpdate", foreignKey: "layout_update_id"});
  LayoutUpdate.hasMany(LayoutLink, { as: "LayoutLinks", foreignKey: "layout_update_id"});
  WidgetInstancePageLayout.belongsTo(LayoutUpdate, { as: "LayoutUpdate", foreignKey: "layout_update_id"});
  LayoutUpdate.hasMany(WidgetInstancePageLayout, { as: "WidgetInstancePageLayouts", foreignKey: "layout_update_id"});
  MagentoAcknowledgedBulk.belongsTo(MagentoBulk, { as: "BulkUu", foreignKey: "bulk_uuid"});
  MagentoBulk.hasOne(MagentoAcknowledgedBulk, { as: "MagentoAcknowledgedBulk", foreignKey: "bulk_uuid"});
  MagentoOperation.belongsTo(MagentoBulk, { as: "BulkUu", foreignKey: "bulk_uuid"});
  MagentoBulk.hasMany(MagentoOperation, { as: "MagentoOperations", foreignKey: "bulk_uuid"});
  MediaGalleryAssetKeyword.belongsTo(MediaGalleryAsset, { as: "Asset", foreignKey: "asset_id"});
  MediaGalleryAsset.hasMany(MediaGalleryAssetKeyword, { as: "MediaGalleryAssetKeywords", foreignKey: "asset_id"});
  MediaGalleryAssetKeyword.belongsTo(MediaGalleryKeyword, { as: "Keyword", foreignKey: "keyword_id"});
  MediaGalleryKeyword.hasMany(MediaGalleryAssetKeyword, { as: "MediaGalleryAssetKeywords", foreignKey: "keyword_id"});
  NewsletterProblem.belongsTo(NewsletterQueue, { as: "Queue", foreignKey: "queue_id"});
  NewsletterQueue.hasMany(NewsletterProblem, { as: "NewsletterProblems", foreignKey: "queue_id"});
  NewsletterQueueLink.belongsTo(NewsletterQueue, { as: "Queue", foreignKey: "queue_id"});
  NewsletterQueue.hasMany(NewsletterQueueLink, { as: "NewsletterQueueLinks", foreignKey: "queue_id"});
  NewsletterQueueStoreLink.belongsTo(NewsletterQueue, { as: "Queue", foreignKey: "queue_id"});
  NewsletterQueue.hasMany(NewsletterQueueStoreLink, { as: "NewsletterQueueStoreLinks", foreignKey: "queue_id"});
  NewsletterProblem.belongsTo(NewsletterSubscriber, { as: "Subscriber", foreignKey: "subscriber_id"});
  NewsletterSubscriber.hasMany(NewsletterProblem, { as: "NewsletterProblems", foreignKey: "subscriber_id"});
  NewsletterQueueLink.belongsTo(NewsletterSubscriber, { as: "Subscriber", foreignKey: "subscriber_id"});
  NewsletterSubscriber.hasMany(NewsletterQueueLink, { as: "NewsletterQueueLinks", foreignKey: "subscriber_id"});
  NewsletterQueue.belongsTo(NewsletterTemplate, { as: "Template", foreignKey: "template_id"});
  NewsletterTemplate.hasMany(NewsletterQueue, { as: "NewsletterQueues", foreignKey: "template_id"});
  Integration.belongsTo(OauthConsumer, { as: "Consumer", foreignKey: "consumer_id"});
  OauthConsumer.hasOne(Integration, { as: "Integration", foreignKey: "consumer_id"});
  OauthNonce.belongsTo(OauthConsumer, { as: "Consumer", foreignKey: "consumer_id"});
  OauthConsumer.hasMany(OauthNonce, { as: "OauthNonces", foreignKey: "consumer_id"});
  OauthToken.belongsTo(OauthConsumer, { as: "Consumer", foreignKey: "consumer_id"});
  OauthConsumer.hasMany(OauthToken, { as: "OauthTokens", foreignKey: "consumer_id"});
  PaypalBillingAgreementOrder.belongsTo(PaypalBillingAgreement, { as: "Agreement", foreignKey: "agreement_id"});
  PaypalBillingAgreement.hasMany(PaypalBillingAgreementOrder, { as: "PaypalBillingAgreementOrders", foreignKey: "agreement_id"});
  PaypalSettlementReportRow.belongsTo(PaypalSettlementReport, { as: "Report", foreignKey: "report_id"});
  PaypalSettlementReport.hasMany(PaypalSettlementReportRow, { as: "PaypalSettlementReportRows", foreignKey: "report_id"});
  QueueMessageStatus.belongsTo(Queue, { foreignKey: "queue_id"});
  Queue.hasMany(QueueMessageStatus, { as: "QueueMessageStatuses", foreignKey: "queue_id"});
  QueueMessageStatus.belongsTo(QueueMessage, { as: "Message", foreignKey: "message_id"});
  QueueMessage.hasMany(QueueMessageStatus, { as: "QueueMessageStatuses", foreignKey: "message_id"});
  QuoteAddress.belongsTo(Quote, { foreignKey: "quote_id"});
  Quote.hasMany(QuoteAddress, { as: "QuoteAddresses", foreignKey: "quote_id"});
  QuoteIdMask.belongsTo(Quote, { foreignKey: "quote_id"});
  Quote.hasMany(QuoteIdMask, { as: "QuoteIdMasks", foreignKey: "quote_id"});
  QuoteItem.belongsTo(Quote, { foreignKey: "quote_id"});
  Quote.hasMany(QuoteItem, { as: "QuoteItems", foreignKey: "quote_id"});
  QuotePayment.belongsTo(Quote, { foreignKey: "quote_id"});
  Quote.hasMany(QuotePayment, { as: "QuotePayments", foreignKey: "quote_id"});
  QuoteAddressItem.belongsTo(QuoteAddress, { as: "QuoteAddress", foreignKey: "quote_address_id"});
  QuoteAddress.hasMany(QuoteAddressItem, { as: "QuoteAddressItems", foreignKey: "quote_address_id"});
  QuoteShippingRate.belongsTo(QuoteAddress, { as: "Address", foreignKey: "address_id"});
  QuoteAddress.hasMany(QuoteShippingRate, { as: "QuoteShippingRates", foreignKey: "address_id"});
  QuoteAddressItem.belongsTo(QuoteAddressItem, { as: "ParentItem", foreignKey: "parent_item_id"});
  QuoteAddressItem.hasMany(QuoteAddressItem, { as: "QuoteAddressItems", foreignKey: "parent_item_id"});
  QuoteAddressItem.belongsTo(QuoteItem, { as: "QuoteItem", foreignKey: "quote_item_id"});
  QuoteItem.hasMany(QuoteAddressItem, { as: "QuoteAddressItems", foreignKey: "quote_item_id"});
  QuoteItem.belongsTo(QuoteItem, { as: "ParentItem", foreignKey: "parent_item_id"});
  QuoteItem.hasMany(QuoteItem, { as: "QuoteItems", foreignKey: "parent_item_id"});
  QuoteItemOption.belongsTo(QuoteItem, { as: "Item", foreignKey: "item_id"});
  QuoteItem.hasMany(QuoteItemOption, { as: "QuoteItemOptions", foreignKey: "item_id"});
  RatingOption.belongsTo(Rating, { foreignKey: "rating_id"});
  Rating.hasMany(RatingOption, { as: "RatingOptions", foreignKey: "rating_id"});
  RatingOptionVoteAggregated.belongsTo(Rating, { foreignKey: "rating_id"});
  Rating.hasMany(RatingOptionVoteAggregated, { as: "RatingOptionVoteAggregateds", foreignKey: "rating_id"});
  RatingStore.belongsTo(Rating, { foreignKey: "rating_id"});
  Rating.hasMany(RatingStore, { as: "RatingStores", foreignKey: "rating_id"});
  RatingTitle.belongsTo(Rating, { foreignKey: "rating_id"});
  Rating.hasMany(RatingTitle, { as: "RatingTitles", foreignKey: "rating_id"});
  Rating.belongsTo(RatingEntity, { as: "Entity", foreignKey: "entity_id"});
  RatingEntity.hasMany(Rating, { foreignKey: "entity_id"});
  RatingOptionVote.belongsTo(RatingOption, { as: "Option", foreignKey: "option_id"});
  RatingOption.hasMany(RatingOptionVote, { as: "RatingOptionVotes", foreignKey: "option_id"});
  ReportEvent.belongsTo(ReportEventTypes, { as: "EventType", foreignKey: "event_type_id"});
  ReportEventTypes.hasMany(ReportEvent, { as: "ReportEvents", foreignKey: "event_type_id"});
  RatingOptionVote.belongsTo(Review, { foreignKey: "review_id"});
  Review.hasMany(RatingOptionVote, { as: "RatingOptionVotes", foreignKey: "review_id"});
  ReviewDetail.belongsTo(Review, { foreignKey: "review_id"});
  Review.hasMany(ReviewDetail, { as: "ReviewDetails", foreignKey: "review_id"});
  ReviewStore.belongsTo(Review, { foreignKey: "review_id"});
  Review.hasMany(ReviewStore, { as: "ReviewStores", foreignKey: "review_id"});
  Review.belongsTo(ReviewEntity, { as: "Entity", foreignKey: "entity_id"});
  ReviewEntity.hasMany(Review, { foreignKey: "entity_id"});
  Review.belongsTo(ReviewStatus, { as: "Status", foreignKey: "status_id"});
  ReviewStatus.hasMany(Review, { foreignKey: "status_id"});
  SalesCreditmemoComment.belongsTo(SalesCreditmemo, { as: "Parent", foreignKey: "parent_id"});
  SalesCreditmemo.hasMany(SalesCreditmemoComment, { as: "SalesCreditmemoComments", foreignKey: "parent_id"});
  SalesCreditmemoItem.belongsTo(SalesCreditmemo, { as: "Parent", foreignKey: "parent_id"});
  SalesCreditmemo.hasMany(SalesCreditmemoItem, { as: "SalesCreditmemoItems", foreignKey: "parent_id"});
  SalesInvoiceComment.belongsTo(SalesInvoice, { as: "Parent", foreignKey: "parent_id"});
  SalesInvoice.hasMany(SalesInvoiceComment, { as: "SalesInvoiceComments", foreignKey: "parent_id"});
  SalesInvoiceItem.belongsTo(SalesInvoice, { as: "Parent", foreignKey: "parent_id"});
  SalesInvoice.hasMany(SalesInvoiceItem, { as: "SalesInvoiceItems", foreignKey: "parent_id"});
  DownloadableLinkPurchased.belongsTo(SalesOrder, { as: "Order", foreignKey: "order_id"});
  SalesOrder.hasMany(DownloadableLinkPurchased, { as: "DownloadableLinkPurchaseds", foreignKey: "order_id"});
  PaypalBillingAgreementOrder.belongsTo(SalesOrder, { as: "Order", foreignKey: "order_id"});
  SalesOrder.hasMany(PaypalBillingAgreementOrder, { as: "PaypalBillingAgreementOrders", foreignKey: "order_id"});
  SalesCreditmemo.belongsTo(SalesOrder, { as: "Order", foreignKey: "order_id"});
  SalesOrder.hasMany(SalesCreditmemo, { as: "SalesCreditmemos", foreignKey: "order_id"});
  SalesInvoice.belongsTo(SalesOrder, { as: "Order", foreignKey: "order_id"});
  SalesOrder.hasMany(SalesInvoice, { as: "SalesInvoices", foreignKey: "order_id"});
  SalesOrderAddress.belongsTo(SalesOrder, { as: "Parent", foreignKey: "parent_id"});
  SalesOrder.hasMany(SalesOrderAddress, { as: "SalesOrderAddresses", foreignKey: "parent_id"});
  SalesOrderItem.belongsTo(SalesOrder, { as: "Order", foreignKey: "order_id"});
  SalesOrder.hasMany(SalesOrderItem, { as: "SalesOrderItems", foreignKey: "order_id"});
  SalesOrderPayment.belongsTo(SalesOrder, { as: "Parent", foreignKey: "parent_id"});
  SalesOrder.hasMany(SalesOrderPayment, { as: "SalesOrderPayments", foreignKey: "parent_id"});
  SalesOrderStatusHistory.belongsTo(SalesOrder, { as: "Parent", foreignKey: "parent_id"});
  SalesOrder.hasMany(SalesOrderStatusHistory, { as: "SalesOrderStatusHistories", foreignKey: "parent_id"});
  SalesPaymentTransaction.belongsTo(SalesOrder, { as: "Order", foreignKey: "order_id"});
  SalesOrder.hasMany(SalesPaymentTransaction, { as: "SalesPaymentTransactions", foreignKey: "order_id"});
  SalesShipment.belongsTo(SalesOrder, { as: "Order", foreignKey: "order_id"});
  SalesOrder.hasMany(SalesShipment, { as: "SalesShipments", foreignKey: "order_id"});
  DownloadableLinkPurchasedItem.belongsTo(SalesOrderItem, { as: "OrderItem", foreignKey: "order_item_id"});
  SalesOrderItem.hasMany(DownloadableLinkPurchasedItem, { as: "DownloadableLinkPurchasedItems", foreignKey: "order_item_id"});
  SalesOrderTaxItem.belongsTo(SalesOrderItem, { as: "Item", foreignKey: "item_id"});
  SalesOrderItem.hasMany(SalesOrderTaxItem, { as: "SalesOrderTaxItems", foreignKey: "item_id"});
  SalesOrderTaxItem.belongsTo(SalesOrderItem, { as: "AssociatedItem", foreignKey: "associated_item_id"});
  SalesOrderItem.hasMany(SalesOrderTaxItem, { as: "AssociatedItemSalesOrderTaxItems", foreignKey: "associated_item_id"});
  SalesPaymentTransaction.belongsTo(SalesOrderPayment, { as: "Payment", foreignKey: "payment_id"});
  SalesOrderPayment.hasMany(SalesPaymentTransaction, { as: "SalesPaymentTransactions", foreignKey: "payment_id"});
  VaultPaymentTokenOrderPaymentLink.belongsTo(SalesOrderPayment, { as: "OrderPayment", foreignKey: "order_payment_id"});
  SalesOrderPayment.hasMany(VaultPaymentTokenOrderPaymentLink, { as: "VaultPaymentTokenOrderPaymentLinks", foreignKey: "order_payment_id"});
  SalesOrderStatusLabel.belongsTo(SalesOrderStatus, { as: "StatusSalesOrderStatus", foreignKey: "status"});
  SalesOrderStatus.hasMany(SalesOrderStatusLabel, { as: "SalesOrderStatusLabels", foreignKey: "status"});
  SalesOrderStatusState.belongsTo(SalesOrderStatus, { as: "StatusSalesOrderStatus", foreignKey: "status"});
  SalesOrderStatus.hasMany(SalesOrderStatusState, { as: "SalesOrderStatusStates", foreignKey: "status"});
  SalesOrderTaxItem.belongsTo(SalesOrderTax, { as: "Tax", foreignKey: "tax_id"});
  SalesOrderTax.hasMany(SalesOrderTaxItem, { as: "SalesOrderTaxItems", foreignKey: "tax_id"});
  SalesPaymentTransaction.belongsTo(SalesPaymentTransaction, { as: "Parent", foreignKey: "parent_id"});
  SalesPaymentTransaction.hasMany(SalesPaymentTransaction, { as: "SalesPaymentTransactions", foreignKey: "parent_id"});
  SalesSequenceProfile.belongsTo(SalesSequenceMeta, { as: "Metum", foreignKey: "meta_id"});
  SalesSequenceMeta.hasMany(SalesSequenceProfile, { as: "SalesSequenceProfiles", foreignKey: "meta_id"});
  SalesShipmentComment.belongsTo(SalesShipment, { as: "Parent", foreignKey: "parent_id"});
  SalesShipment.hasMany(SalesShipmentComment, { as: "SalesShipmentComments", foreignKey: "parent_id"});
  SalesShipmentItem.belongsTo(SalesShipment, { as: "Parent", foreignKey: "parent_id"});
  SalesShipment.hasMany(SalesShipmentItem, { as: "SalesShipmentItems", foreignKey: "parent_id"});
  SalesShipmentTrack.belongsTo(SalesShipment, { as: "Parent", foreignKey: "parent_id"});
  SalesShipment.hasMany(SalesShipmentTrack, { as: "SalesShipmentTracks", foreignKey: "parent_id"});
  SalesruleCoupon.belongsTo(Salesrule, { as: "Rule", foreignKey: "rule_id"});
  Salesrule.hasMany(SalesruleCoupon, { as: "SalesruleCoupons", foreignKey: "rule_id"});
  SalesruleCustomer.belongsTo(Salesrule, { as: "Rule", foreignKey: "rule_id"});
  Salesrule.hasMany(SalesruleCustomer, { as: "SalesruleCustomers", foreignKey: "rule_id"});
  SalesruleCustomerGroup.belongsTo(Salesrule, { as: "Rule", foreignKey: "rule_id"});
  Salesrule.hasMany(SalesruleCustomerGroup, { as: "SalesruleCustomerGroups", foreignKey: "rule_id"});
  SalesruleLabel.belongsTo(Salesrule, { as: "Rule", foreignKey: "rule_id"});
  Salesrule.hasMany(SalesruleLabel, { as: "SalesruleLabels", foreignKey: "rule_id"});
  SalesruleProductAttribute.belongsTo(Salesrule, { as: "Rule", foreignKey: "rule_id"});
  Salesrule.hasMany(SalesruleProductAttribute, { as: "SalesruleProductAttributes", foreignKey: "rule_id"});
  SalesruleWebsite.belongsTo(Salesrule, { as: "Rule", foreignKey: "rule_id"});
  Salesrule.hasMany(SalesruleWebsite, { as: "SalesruleWebsites", foreignKey: "rule_id"});
  SalesruleCouponUsage.belongsTo(SalesruleCoupon, { as: "Coupon", foreignKey: "coupon_id"});
  SalesruleCoupon.hasMany(SalesruleCouponUsage, { as: "SalesruleCouponUsages", foreignKey: "coupon_id"});
  CatalogsearchRecommendations.belongsTo(SearchQuery, { as: "Query", foreignKey: "query_id"});
  SearchQuery.hasMany(CatalogsearchRecommendations, { as: "CatalogsearchRecommendations", foreignKey: "query_id"});
  CatalogsearchRecommendations.belongsTo(SearchQuery, { as: "Relation", foreignKey: "relation_id"});
  SearchQuery.hasMany(CatalogsearchRecommendations, { as: "RelationCatalogsearchRecommendations", foreignKey: "relation_id"});
  CatalogCategoryEntityDatetime.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(CatalogCategoryEntityDatetime, { as: "CatalogCategoryEntityDatetimes", foreignKey: "store_id"});
  CatalogCategoryEntityDecimal.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(CatalogCategoryEntityDecimal, { as: "CatalogCategoryEntityDecimals", foreignKey: "store_id"});
  CatalogCategoryEntityInt.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(CatalogCategoryEntityInt, { as: "CatalogCategoryEntityInts", foreignKey: "store_id"});
  CatalogCategoryEntityText.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(CatalogCategoryEntityText, { as: "CatalogCategoryEntityTexts", foreignKey: "store_id"});
  CatalogCategoryEntityVarchar.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(CatalogCategoryEntityVarchar, { as: "CatalogCategoryEntityVarchars", foreignKey: "store_id"});
  CatalogCompareItem.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(CatalogCompareItem, { as: "CatalogCompareItems", foreignKey: "store_id"});
  CatalogProductEntityDatetime.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(CatalogProductEntityDatetime, { as: "CatalogProductEntityDatetimes", foreignKey: "store_id"});
  CatalogProductEntityDecimal.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(CatalogProductEntityDecimal, { as: "CatalogProductEntityDecimals", foreignKey: "store_id"});
  CatalogProductEntityGallery.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(CatalogProductEntityGallery, { as: "CatalogProductEntityGalleries", foreignKey: "store_id"});
  CatalogProductEntityInt.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(CatalogProductEntityInt, { as: "CatalogProductEntityInts", foreignKey: "store_id"});
  CatalogProductEntityMediaGalleryValue.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(CatalogProductEntityMediaGalleryValue, { as: "CatalogProductEntityMediaGalleryValues", foreignKey: "store_id"});
  CatalogProductEntityMediaGalleryValueVideo.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(CatalogProductEntityMediaGalleryValueVideo, { as: "CatalogProductEntityMediaGalleryValueVideos", foreignKey: "store_id"});
  CatalogProductEntityText.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(CatalogProductEntityText, { as: "CatalogProductEntityTexts", foreignKey: "store_id"});
  CatalogProductEntityVarchar.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(CatalogProductEntityVarchar, { as: "CatalogProductEntityVarchars", foreignKey: "store_id"});
  CatalogProductOptionPrice.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(CatalogProductOptionPrice, { as: "CatalogProductOptionPrices", foreignKey: "store_id"});
  CatalogProductOptionTitle.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(CatalogProductOptionTitle, { as: "CatalogProductOptionTitles", foreignKey: "store_id"});
  CatalogProductOptionTypePrice.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(CatalogProductOptionTypePrice, { as: "CatalogProductOptionTypePrices", foreignKey: "store_id"});
  CatalogProductOptionTypeTitle.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(CatalogProductOptionTypeTitle, { as: "CatalogProductOptionTypeTitles", foreignKey: "store_id"});
  CatalogProductSuperAttributeLabel.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(CatalogProductSuperAttributeLabel, { as: "CatalogProductSuperAttributeLabels", foreignKey: "store_id"});
  CheckoutAgreementStore.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(CheckoutAgreementStore, { as: "CheckoutAgreementStores", foreignKey: "store_id"});
  CmsBlockStore.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(CmsBlockStore, { as: "CmsBlockStores", foreignKey: "store_id"});
  CmsPageStore.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(CmsPageStore, { as: "CmsPageStores", foreignKey: "store_id"});
  CustomerEntity.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(CustomerEntity, { as: "CustomerEntities", foreignKey: "store_id"});
  DesignChange.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(DesignChange, { as: "DesignChanges", foreignKey: "store_id"});
  DownloadableLinkTitle.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(DownloadableLinkTitle, { as: "DownloadableLinkTitles", foreignKey: "store_id"});
  DownloadableSampleTitle.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(DownloadableSampleTitle, { as: "DownloadableSampleTitles", foreignKey: "store_id"});
  EavAttributeLabel.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(EavAttributeLabel, { as: "EavAttributeLabels", foreignKey: "store_id"});
  EavAttributeOptionSwatch.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(EavAttributeOptionSwatch, { as: "EavAttributeOptionSwatches", foreignKey: "store_id"});
  EavAttributeOptionValue.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(EavAttributeOptionValue, { as: "EavAttributeOptionValues", foreignKey: "store_id"});
  EavEntity.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(EavEntity, { as: "EavEntities", foreignKey: "store_id"});
  EavEntityDatetime.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(EavEntityDatetime, { as: "EavEntityDatetimes", foreignKey: "store_id"});
  EavEntityDecimal.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(EavEntityDecimal, { as: "EavEntityDecimals", foreignKey: "store_id"});
  EavEntityInt.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(EavEntityInt, { as: "EavEntityInts", foreignKey: "store_id"});
  EavEntityStore.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(EavEntityStore, { as: "EavEntityStores", foreignKey: "store_id"});
  EavEntityText.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(EavEntityText, { as: "EavEntityTexts", foreignKey: "store_id"});
  EavEntityVarchar.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(EavEntityVarchar, { as: "EavEntityVarchars", foreignKey: "store_id"});
  EavFormFieldsetLabel.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(EavFormFieldsetLabel, { as: "EavFormFieldsetLabels", foreignKey: "store_id"});
  EavFormType.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(EavFormType, { as: "EavFormTypes", foreignKey: "store_id"});
  GoogleoptimizerCode.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(GoogleoptimizerCode, { as: "GoogleoptimizerCodes", foreignKey: "store_id"});
  LayoutLink.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(LayoutLink, { as: "LayoutLinks", foreignKey: "store_id"});
  NewsletterQueueStoreLink.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(NewsletterQueueStoreLink, { as: "NewsletterQueueStoreLinks", foreignKey: "store_id"});
  NewsletterSubscriber.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(NewsletterSubscriber, { as: "NewsletterSubscribers", foreignKey: "store_id"});
  PaypalBillingAgreement.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(PaypalBillingAgreement, { as: "PaypalBillingAgreements", foreignKey: "store_id"});
  ProductAlertPrice.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(ProductAlertPrice, { as: "ProductAlertPrices", foreignKey: "store_id"});
  ProductAlertStock.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(ProductAlertStock, { as: "ProductAlertStocks", foreignKey: "store_id"});
  Quote.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(Quote, { foreignKey: "store_id"});
  QuoteItem.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(QuoteItem, { as: "QuoteItems", foreignKey: "store_id"});
  RatingOptionVoteAggregated.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(RatingOptionVoteAggregated, { as: "RatingOptionVoteAggregateds", foreignKey: "store_id"});
  RatingStore.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(RatingStore, { as: "RatingStores", foreignKey: "store_id"});
  RatingTitle.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(RatingTitle, { as: "RatingTitles", foreignKey: "store_id"});
  ReportComparedProductIndex.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(ReportComparedProductIndex, { as: "ReportComparedProductIndices", foreignKey: "store_id"});
  ReportEvent.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(ReportEvent, { as: "ReportEvents", foreignKey: "store_id"});
  ReportViewedProductAggregatedDaily.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(ReportViewedProductAggregatedDaily, { as: "ReportViewedProductAggregatedDailies", foreignKey: "store_id"});
  ReportViewedProductAggregatedMonthly.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(ReportViewedProductAggregatedMonthly, { as: "ReportViewedProductAggregatedMonthlies", foreignKey: "store_id"});
  ReportViewedProductAggregatedYearly.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(ReportViewedProductAggregatedYearly, { as: "ReportViewedProductAggregatedYearlies", foreignKey: "store_id"});
  ReportViewedProductIndex.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(ReportViewedProductIndex, { as: "ReportViewedProductIndices", foreignKey: "store_id"});
  ReviewDetail.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(ReviewDetail, { as: "ReviewDetails", foreignKey: "store_id"});
  ReviewEntitySummary.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(ReviewEntitySummary, { as: "ReviewEntitySummaries", foreignKey: "store_id"});
  ReviewStore.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(ReviewStore, { as: "ReviewStores", foreignKey: "store_id"});
  SalesBestsellersAggregatedDaily.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(SalesBestsellersAggregatedDaily, { as: "SalesBestsellersAggregatedDailies", foreignKey: "store_id"});
  SalesBestsellersAggregatedMonthly.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(SalesBestsellersAggregatedMonthly, { as: "SalesBestsellersAggregatedMonthlies", foreignKey: "store_id"});
  SalesBestsellersAggregatedYearly.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(SalesBestsellersAggregatedYearly, { as: "SalesBestsellersAggregatedYearlies", foreignKey: "store_id"});
  SalesCreditmemo.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(SalesCreditmemo, { as: "SalesCreditmemos", foreignKey: "store_id"});
  SalesInvoice.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(SalesInvoice, { as: "SalesInvoices", foreignKey: "store_id"});
  SalesInvoicedAggregated.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(SalesInvoicedAggregated, { as: "SalesInvoicedAggregateds", foreignKey: "store_id"});
  SalesInvoicedAggregatedOrder.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(SalesInvoicedAggregatedOrder, { as: "SalesInvoicedAggregatedOrders", foreignKey: "store_id"});
  SalesOrder.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(SalesOrder, { as: "SalesOrders", foreignKey: "store_id"});
  SalesOrderAggregatedCreated.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(SalesOrderAggregatedCreated, { as: "SalesOrderAggregatedCreateds", foreignKey: "store_id"});
  SalesOrderAggregatedUpdated.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(SalesOrderAggregatedUpdated, { as: "SalesOrderAggregatedUpdateds", foreignKey: "store_id"});
  SalesOrderItem.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(SalesOrderItem, { as: "SalesOrderItems", foreignKey: "store_id"});
  SalesOrderStatusLabel.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(SalesOrderStatusLabel, { as: "SalesOrderStatusLabels", foreignKey: "store_id"});
  SalesRefundedAggregated.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(SalesRefundedAggregated, { as: "SalesRefundedAggregateds", foreignKey: "store_id"});
  SalesRefundedAggregatedOrder.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(SalesRefundedAggregatedOrder, { as: "SalesRefundedAggregatedOrders", foreignKey: "store_id"});
  SalesShipment.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(SalesShipment, { as: "SalesShipments", foreignKey: "store_id"});
  SalesShippingAggregated.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(SalesShippingAggregated, { as: "SalesShippingAggregateds", foreignKey: "store_id"});
  SalesShippingAggregatedOrder.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(SalesShippingAggregatedOrder, { as: "SalesShippingAggregatedOrders", foreignKey: "store_id"});
  SalesruleCouponAggregated.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(SalesruleCouponAggregated, { as: "SalesruleCouponAggregateds", foreignKey: "store_id"});
  SalesruleCouponAggregatedOrder.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(SalesruleCouponAggregatedOrder, { as: "SalesruleCouponAggregatedOrders", foreignKey: "store_id"});
  SalesruleCouponAggregatedUpdated.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(SalesruleCouponAggregatedUpdated, { as: "SalesruleCouponAggregatedUpdateds", foreignKey: "store_id"});
  SalesruleLabel.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(SalesruleLabel, { as: "SalesruleLabels", foreignKey: "store_id"});
  SearchQuery.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(SearchQuery, { as: "SearchQueries", foreignKey: "store_id"});
  SearchSynonyms.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(SearchSynonyms, { as: "SearchSynonyms", foreignKey: "store_id"});
  Sitemap.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(Sitemap, { foreignKey: "store_id"});
  TaxCalculationRateTitle.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(TaxCalculationRateTitle, { as: "TaxCalculationRateTitles", foreignKey: "store_id"});
  TaxOrderAggregatedCreated.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(TaxOrderAggregatedCreated, { as: "TaxOrderAggregatedCreateds", foreignKey: "store_id"});
  TaxOrderAggregatedUpdated.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(TaxOrderAggregatedUpdated, { as: "TaxOrderAggregatedUpdateds", foreignKey: "store_id"});
  Translation.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(Translation, { foreignKey: "store_id"});
  VariableValue.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(VariableValue, { as: "VariableValues", foreignKey: "store_id"});
  WishlistItem.belongsTo(Store, { foreignKey: "store_id"});
  Store.hasMany(WishlistItem, { as: "WishlistItems", foreignKey: "store_id"});
  Store.belongsTo(StoreGroup, { as: "Group", foreignKey: "group_id"});
  StoreGroup.hasMany(Store, { foreignKey: "group_id"});
  CatalogProductBundlePriceIndex.belongsTo(StoreWebsite, { as: "Website", foreignKey: "website_id"});
  StoreWebsite.hasMany(CatalogProductBundlePriceIndex, { as: "CatalogProductBundlePriceIndices", foreignKey: "website_id"});
  CatalogProductBundleSelectionPrice.belongsTo(StoreWebsite, { as: "Website", foreignKey: "website_id"});
  StoreWebsite.hasMany(CatalogProductBundleSelectionPrice, { as: "CatalogProductBundleSelectionPrices", foreignKey: "website_id"});
  CatalogProductEntityTierPrice.belongsTo(StoreWebsite, { as: "Website", foreignKey: "website_id"});
  StoreWebsite.hasMany(CatalogProductEntityTierPrice, { as: "CatalogProductEntityTierPrices", foreignKey: "website_id"});
  CatalogProductIndexTierPrice.belongsTo(StoreWebsite, { as: "Website", foreignKey: "website_id"});
  StoreWebsite.hasMany(CatalogProductIndexTierPrice, { as: "CatalogProductIndexTierPrices", foreignKey: "website_id"});
  CatalogProductIndexWebsite.belongsTo(StoreWebsite, { as: "Website", foreignKey: "website_id"});
  StoreWebsite.hasOne(CatalogProductIndexWebsite, { as: "CatalogProductIndexWebsite", foreignKey: "website_id"});
  CatalogProductWebsite.belongsTo(StoreWebsite, { as: "Website", foreignKey: "website_id"});
  StoreWebsite.hasMany(CatalogProductWebsite, { as: "CatalogProductWebsites", foreignKey: "website_id"});
  CatalogruleWebsite.belongsTo(StoreWebsite, { as: "Website", foreignKey: "website_id"});
  StoreWebsite.hasMany(CatalogruleWebsite, { as: "CatalogruleWebsites", foreignKey: "website_id"});
  CustomerEavAttributeWebsite.belongsTo(StoreWebsite, { as: "Website", foreignKey: "website_id"});
  StoreWebsite.hasMany(CustomerEavAttributeWebsite, { as: "CustomerEavAttributeWebsites", foreignKey: "website_id"});
  CustomerEntity.belongsTo(StoreWebsite, { as: "Website", foreignKey: "website_id"});
  StoreWebsite.hasMany(CustomerEntity, { as: "CustomerEntities", foreignKey: "website_id"});
  DownloadableLinkPrice.belongsTo(StoreWebsite, { as: "Website", foreignKey: "website_id"});
  StoreWebsite.hasMany(DownloadableLinkPrice, { as: "DownloadableLinkPrices", foreignKey: "website_id"});
  PaypalCert.belongsTo(StoreWebsite, { as: "Website", foreignKey: "website_id"});
  StoreWebsite.hasMany(PaypalCert, { as: "PaypalCerts", foreignKey: "website_id"});
  PersistentSession.belongsTo(StoreWebsite, { as: "Website", foreignKey: "website_id"});
  StoreWebsite.hasMany(PersistentSession, { as: "PersistentSessions", foreignKey: "website_id"});
  ProductAlertPrice.belongsTo(StoreWebsite, { as: "Website", foreignKey: "website_id"});
  StoreWebsite.hasMany(ProductAlertPrice, { as: "ProductAlertPrices", foreignKey: "website_id"});
  ProductAlertStock.belongsTo(StoreWebsite, { as: "Website", foreignKey: "website_id"});
  StoreWebsite.hasMany(ProductAlertStock, { as: "ProductAlertStocks", foreignKey: "website_id"});
  SalesruleProductAttribute.belongsTo(StoreWebsite, { as: "Website", foreignKey: "website_id"});
  StoreWebsite.hasMany(SalesruleProductAttribute, { as: "SalesruleProductAttributes", foreignKey: "website_id"});
  SalesruleWebsite.belongsTo(StoreWebsite, { as: "Website", foreignKey: "website_id"});
  StoreWebsite.hasMany(SalesruleWebsite, { as: "SalesruleWebsites", foreignKey: "website_id"});
  SearchSynonyms.belongsTo(StoreWebsite, { as: "Website", foreignKey: "website_id"});
  StoreWebsite.hasMany(SearchSynonyms, { as: "SearchSynonyms", foreignKey: "website_id"});
  Store.belongsTo(StoreWebsite, { as: "Website", foreignKey: "website_id"});
  StoreWebsite.hasMany(Store, { foreignKey: "website_id"});
  StoreGroup.belongsTo(StoreWebsite, { as: "Website", foreignKey: "website_id"});
  StoreWebsite.hasMany(StoreGroup, { as: "StoreGroups", foreignKey: "website_id"});
  WeeeTax.belongsTo(StoreWebsite, { as: "Website", foreignKey: "website_id"});
  StoreWebsite.hasMany(WeeeTax, { as: "WeeeTaxes", foreignKey: "website_id"});
  TaxCalculation.belongsTo(TaxCalculationRate, { as: "TaxCalculationRate", foreignKey: "tax_calculation_rate_id"});
  TaxCalculationRate.hasMany(TaxCalculation, { as: "TaxCalculations", foreignKey: "tax_calculation_rate_id"});
  TaxCalculationRateTitle.belongsTo(TaxCalculationRate, { as: "TaxCalculationRate", foreignKey: "tax_calculation_rate_id"});
  TaxCalculationRate.hasMany(TaxCalculationRateTitle, { as: "TaxCalculationRateTitles", foreignKey: "tax_calculation_rate_id"});
  TaxCalculation.belongsTo(TaxCalculationRule, { as: "TaxCalculationRule", foreignKey: "tax_calculation_rule_id"});
  TaxCalculationRule.hasMany(TaxCalculation, { as: "TaxCalculations", foreignKey: "tax_calculation_rule_id"});
  TaxCalculation.belongsTo(TaxClass, { as: "CustomerTaxClass", foreignKey: "customer_tax_class_id"});
  TaxClass.hasMany(TaxCalculation, { as: "TaxCalculations", foreignKey: "customer_tax_class_id"});
  TaxCalculation.belongsTo(TaxClass, { as: "ProductTaxClass", foreignKey: "product_tax_class_id"});
  TaxClass.hasMany(TaxCalculation, { as: "ProductTaxClassTaxCalculations", foreignKey: "product_tax_class_id"});
  LayoutLink.belongsTo(Theme, { foreignKey: "theme_id"});
  Theme.hasMany(LayoutLink, { as: "LayoutLinks", foreignKey: "theme_id"});
  ThemeFile.belongsTo(Theme, { foreignKey: "theme_id"});
  Theme.hasMany(ThemeFile, { as: "ThemeFiles", foreignKey: "theme_id"});
  WidgetInstance.belongsTo(Theme, { foreignKey: "theme_id"});
  Theme.hasMany(WidgetInstance, { as: "WidgetInstances", foreignKey: "theme_id"});
  CatalogUrlRewriteProductCategory.belongsTo(UrlRewrite, { as: "UrlRewrite", foreignKey: "url_rewrite_id"});
  UrlRewrite.hasMany(CatalogUrlRewriteProductCategory, { as: "CatalogUrlRewriteProductCategories", foreignKey: "url_rewrite_id"});
  VariableValue.belongsTo(Variable, { foreignKey: "variable_id"});
  Variable.hasMany(VariableValue, { as: "VariableValues", foreignKey: "variable_id"});
  VaultPaymentTokenOrderPaymentLink.belongsTo(VaultPaymentToken, { as: "PaymentToken", foreignKey: "payment_token_id"});
  VaultPaymentToken.hasMany(VaultPaymentTokenOrderPaymentLink, { as: "VaultPaymentTokenOrderPaymentLinks", foreignKey: "payment_token_id"});
  WidgetInstancePage.belongsTo(WidgetInstance, { as: "Instance", foreignKey: "instance_id"});
  WidgetInstance.hasMany(WidgetInstancePage, { as: "WidgetInstancePages", foreignKey: "instance_id"});
  WidgetInstancePageLayout.belongsTo(WidgetInstancePage, { as: "Page", foreignKey: "page_id"});
  WidgetInstancePage.hasMany(WidgetInstancePageLayout, { as: "WidgetInstancePageLayouts", foreignKey: "page_id"});
  WishlistItem.belongsTo(Wishlist, { foreignKey: "wishlist_id"});
  Wishlist.hasMany(WishlistItem, { as: "WishlistItems", foreignKey: "wishlist_id"});
  WishlistItemOption.belongsTo(WishlistItem, { as: "WishlistItem", foreignKey: "wishlist_item_id"});
  WishlistItem.hasMany(WishlistItemOption, { as: "WishlistItemOptions", foreignKey: "wishlist_item_id"});

  return {
    AdminAnalyticsUsageVersionLog,
    AdminPasswords,
    AdminSystemMessages,
    AdminUser,
    AdminUserExpiration,
    AdminUserSession,
    AdminnotificationInbox,
    AuthorizationRole,
    AuthorizationRule,
    Cache,
    CacheTag,
    CaptchaLog,
    CatalogCategoryEntity,
    CatalogCategoryEntityDatetime,
    CatalogCategoryEntityDecimal,
    CatalogCategoryEntityInt,
    CatalogCategoryEntityText,
    CatalogCategoryEntityVarchar,
    CatalogCategoryProduct,
    CatalogCategoryProductIndex,
    CatalogCategoryProductIndexReplica,
    CatalogCategoryProductIndexStore1,
    CatalogCategoryProductIndexStore1Replica,
    CatalogCategoryProductIndexTmp,
    CatalogCompareItem,
    CatalogCompareList,
    CatalogEavAttribute,
    CatalogProductBundleOption,
    CatalogProductBundleOptionValue,
    CatalogProductBundlePriceIndex,
    CatalogProductBundleSelection,
    CatalogProductBundleSelectionPrice,
    CatalogProductBundleStockIndex,
    CatalogProductEntity,
    CatalogProductEntityDatetime,
    CatalogProductEntityDecimal,
    CatalogProductEntityGallery,
    CatalogProductEntityInt,
    CatalogProductEntityMediaGallery,
    CatalogProductEntityMediaGalleryValue,
    CatalogProductEntityMediaGalleryValueToEntity,
    CatalogProductEntityMediaGalleryValueVideo,
    CatalogProductEntityText,
    CatalogProductEntityTierPrice,
    CatalogProductEntityVarchar,
    CatalogProductFrontendAction,
    CatalogProductIndexEav,
    CatalogProductIndexEavDecimal,
    CatalogProductIndexEavDecimalIdx,
    CatalogProductIndexEavDecimalReplica,
    CatalogProductIndexEavDecimalTmp,
    CatalogProductIndexEavIdx,
    CatalogProductIndexEavReplica,
    CatalogProductIndexEavTmp,
    CatalogProductIndexPrice,
    CatalogProductIndexPriceBundleIdx,
    CatalogProductIndexPriceBundleOptIdx,
    CatalogProductIndexPriceBundleOptTmp,
    CatalogProductIndexPriceBundleSelIdx,
    CatalogProductIndexPriceBundleSelTmp,
    CatalogProductIndexPriceBundleTmp,
    CatalogProductIndexPriceCfgOptAgrIdx,
    CatalogProductIndexPriceCfgOptAgrTmp,
    CatalogProductIndexPriceCfgOptIdx,
    CatalogProductIndexPriceCfgOptTmp,
    CatalogProductIndexPriceDownlodIdx,
    CatalogProductIndexPriceDownlodTmp,
    CatalogProductIndexPriceFinalIdx,
    CatalogProductIndexPriceFinalTmp,
    CatalogProductIndexPriceIdx,
    CatalogProductIndexPriceOptAgrIdx,
    CatalogProductIndexPriceOptAgrTmp,
    CatalogProductIndexPriceOptIdx,
    CatalogProductIndexPriceOptTmp,
    CatalogProductIndexPriceReplica,
    CatalogProductIndexPriceTmp,
    CatalogProductIndexTierPrice,
    CatalogProductIndexWebsite,
    CatalogProductLink,
    CatalogProductLinkAttribute,
    CatalogProductLinkAttributeDecimal,
    CatalogProductLinkAttributeInt,
    CatalogProductLinkAttributeVarchar,
    CatalogProductLinkType,
    CatalogProductOption,
    CatalogProductOptionPrice,
    CatalogProductOptionTitle,
    CatalogProductOptionTypePrice,
    CatalogProductOptionTypeTitle,
    CatalogProductOptionTypeValue,
    CatalogProductRelation,
    CatalogProductSuperAttribute,
    CatalogProductSuperAttributeLabel,
    CatalogProductSuperLink,
    CatalogProductWebsite,
    CatalogUrlRewriteProductCategory,
    CataloginventoryStock,
    CataloginventoryStockItem,
    CataloginventoryStockStatus,
    CataloginventoryStockStatusIdx,
    CataloginventoryStockStatusReplica,
    CataloginventoryStockStatusTmp,
    Catalogrule,
    CatalogruleCustomerGroup,
    CatalogruleGroupWebsite,
    CatalogruleGroupWebsiteReplica,
    CatalogruleProduct,
    CatalogruleProductPrice,
    CatalogruleProductPriceReplica,
    CatalogruleProductReplica,
    CatalogruleWebsite,
    CatalogsearchRecommendations,
    CheckoutAgreement,
    CheckoutAgreementStore,
    CmsBlock,
    CmsBlockStore,
    CmsPage,
    CmsPageStore,
    CoreConfigData,
    CronSchedule,
    CustomerAddressEntity,
    CustomerAddressEntityDatetime,
    CustomerAddressEntityDecimal,
    CustomerAddressEntityInt,
    CustomerAddressEntityText,
    CustomerAddressEntityVarchar,
    CustomerEavAttribute,
    CustomerEavAttributeWebsite,
    CustomerEntity,
    CustomerEntityDatetime,
    CustomerEntityDecimal,
    CustomerEntityInt,
    CustomerEntityText,
    CustomerEntityVarchar,
    CustomerFormAttribute,
    CustomerGridFlat,
    CustomerGroup,
    CustomerLog,
    CustomerVisitor,
    DesignChange,
    DesignConfigGridFlat,
    DirectoryCountry,
    DirectoryCountryFormat,
    DirectoryCountryRegion,
    DirectoryCountryRegionName,
    DirectoryCurrencyRate,
    DownloadableLink,
    DownloadableLinkPrice,
    DownloadableLinkPurchased,
    DownloadableLinkPurchasedItem,
    DownloadableLinkTitle,
    DownloadableSample,
    DownloadableSampleTitle,
    EavAttribute,
    EavAttributeGroup,
    EavAttributeLabel,
    EavAttributeOption,
    EavAttributeOptionSwatch,
    EavAttributeOptionValue,
    EavAttributeSet,
    EavEntity,
    EavEntityAttribute,
    EavEntityDatetime,
    EavEntityDecimal,
    EavEntityInt,
    EavEntityStore,
    EavEntityText,
    EavEntityType,
    EavEntityVarchar,
    EavFormElement,
    EavFormFieldset,
    EavFormFieldsetLabel,
    EavFormType,
    EavFormTypeEntity,
    EmailTemplate,
    Flag,
    GiftMessage,
    GoogleoptimizerCode,
    ImportHistory,
    ImportexportImportdata,
    IndexerState,
    Integration,
    LayoutLink,
    LayoutUpdate,
    LoginAsCustomer,
    LoginAsCustomerAssistanceAllowed,
    MagentoAcknowledgedBulk,
    MagentoBulk,
    MagentoLoginAsCustomerLog,
    MagentoOperation,
    MediaContentAsset,
    MediaGalleryAsset,
    MediaGalleryAssetKeyword,
    MediaGalleryKeyword,
    MviewState,
    NewsletterProblem,
    NewsletterQueue,
    NewsletterQueueLink,
    NewsletterQueueStoreLink,
    NewsletterSubscriber,
    NewsletterTemplate,
    OauthConsumer,
    OauthNonce,
    OauthToken,
    OauthTokenRequestLog,
    PasswordResetRequestEvent,
    PatchList,
    PaypalBillingAgreement,
    PaypalBillingAgreementOrder,
    PaypalCert,
    PaypalPaymentTransaction,
    PaypalSettlementReport,
    PaypalSettlementReportRow,
    PersistentSession,
    ProductAlertPrice,
    ProductAlertStock,
    Queue,
    QueueLock,
    QueueMessage,
    QueueMessageStatus,
    QueuePoisonPill,
    Quote,
    QuoteAddress,
    QuoteAddressItem,
    QuoteIdMask,
    QuoteItem,
    QuoteItemOption,
    QuotePayment,
    QuoteShippingRate,
    Rating,
    RatingEntity,
    RatingOption,
    RatingOptionVote,
    RatingOptionVoteAggregated,
    RatingStore,
    RatingTitle,
    ReleaseNotificationViewerLog,
    ReportComparedProductIndex,
    ReportEvent,
    ReportEventTypes,
    ReportViewedProductAggregatedDaily,
    ReportViewedProductAggregatedMonthly,
    ReportViewedProductAggregatedYearly,
    ReportViewedProductIndex,
    ReportingCounts,
    ReportingModuleStatus,
    ReportingOrders,
    ReportingSystemUpdates,
    ReportingUsers,
    Review,
    ReviewDetail,
    ReviewEntity,
    ReviewEntitySummary,
    ReviewStatus,
    ReviewStore,
    SalesBestsellersAggregatedDaily,
    SalesBestsellersAggregatedMonthly,
    SalesBestsellersAggregatedYearly,
    SalesCreditmemo,
    SalesCreditmemoComment,
    SalesCreditmemoGrid,
    SalesCreditmemoItem,
    SalesInvoice,
    SalesInvoiceComment,
    SalesInvoiceGrid,
    SalesInvoiceItem,
    SalesInvoicedAggregated,
    SalesInvoicedAggregatedOrder,
    SalesOrder,
    SalesOrderAddress,
    SalesOrderAggregatedCreated,
    SalesOrderAggregatedUpdated,
    SalesOrderGrid,
    SalesOrderItem,
    SalesOrderPayment,
    SalesOrderStatus,
    SalesOrderStatusHistory,
    SalesOrderStatusLabel,
    SalesOrderStatusState,
    SalesOrderTax,
    SalesOrderTaxItem,
    SalesPaymentTransaction,
    SalesRefundedAggregated,
    SalesRefundedAggregatedOrder,
    SalesSequenceMeta,
    SalesSequenceProfile,
    SalesShipment,
    SalesShipmentComment,
    SalesShipmentGrid,
    SalesShipmentItem,
    SalesShipmentTrack,
    SalesShippingAggregated,
    SalesShippingAggregatedOrder,
    Salesrule,
    SalesruleCoupon,
    SalesruleCouponAggregated,
    SalesruleCouponAggregatedOrder,
    SalesruleCouponAggregatedUpdated,
    SalesruleCouponUsage,
    SalesruleCustomer,
    SalesruleCustomerGroup,
    SalesruleLabel,
    SalesruleProductAttribute,
    SalesruleWebsite,
    SearchQuery,
    SearchSynonyms,
    SendfriendLog,
    SequenceCreditmemo0,
    SequenceCreditmemo1,
    SequenceInvoice0,
    SequenceInvoice1,
    SequenceOrder0,
    SequenceOrder1,
    SequenceShipment0,
    SequenceShipment1,
    Session,
    SetupModule,
    ShippingTablerate,
    Sitemap,
    Store,
    StoreGroup,
    StoreWebsite,
    TaxCalculation,
    TaxCalculationRate,
    TaxCalculationRateTitle,
    TaxCalculationRule,
    TaxClass,
    TaxOrderAggregatedCreated,
    TaxOrderAggregatedUpdated,
    Theme,
    ThemeFile,
    Translation,
    UiBookmark,
    UrlRewrite,
    Variable,
    VariableValue,
    VaultPaymentToken,
    VaultPaymentTokenOrderPaymentLink,
    WeeeTax,
    Widget,
    WidgetInstance,
    WidgetInstancePage,
    WidgetInstancePageLayout,
    Wishlist,
    WishlistItem,
    WishlistItemOption,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
