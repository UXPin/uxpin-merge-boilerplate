import * as React from 'react';
// tslint:disable:variable-name
// tslint:disable:no-var-requires
const ActionAddToFavoritesSvg = require('../icons/action-add-to-favorites.svg') as string;
const ActionArchiveSvg = require('../icons/action-archive.svg') as string;
const ActionArrangeLeftSvg = require('../icons/action-arrange-left.svg') as string;
const ActionArrangeRightSvg = require('../icons/action-arrange-right.svg') as string;
const ActionArrangeVerticalCenterSvg = require('../icons/action-arrange-vertical-center.svg') as string;
const ActionBreakSymbolSvg = require('../icons/action-break-symbol.svg') as string;
const ActionChangeProjectGroupSvg = require('../icons/action-change-project-group.svg') as string;
const ActionCloneSvg = require('../icons/action-clone.svg') as string;
const ActionCloseSvg = require('../icons/action-close.svg') as string;
const ActionDetachingHandlerSvg = require('../icons/action-detaching-handler.svg') as string;
const ActionDisableSvg = require('../icons/action-disable.svg') as string;
const ActionDistributeVerticallySvg = require('../icons/action-distribute-vertically.svg') as string;
const ActionDuplicateSvg = require('../icons/action-duplicate.svg') as string;
const ActionElementAlignCenterSvg = require('../icons/action-element-align-center.svg') as string;
const ActionElementAlignSvg = require('../icons/action-element-align.svg') as string;
const ActionElementFlipSvg = require('../icons/action-element-flip.svg') as string;
const ActionEnableSvg = require('../icons/action-enable.svg') as string;
const ActionExitSvg = require('../icons/action-exit.svg') as string;
const ActionFullScreenSvg = require('../icons/action-full-screen.svg') as string;
const ActionInsertDataSvg = require('../icons/action-insert-data.svg') as string;
const ActionLogOutSvg = require('../icons/action-log-out.svg') as string;
const ActionMoveBehindSvg = require('../icons/action-move-behind.svg') as string;
const ActionMoveBySvg = require('../icons/action-move-by.svg') as string;
const ActionMoveForwardSvg = require('../icons/action-move-forward.svg') as string;
const ActionMoveToBackSvg = require('../icons/action-move-to-back.svg') as string;
const ActionMoveToFrontSvg = require('../icons/action-move-to-front.svg') as string;
const ActionMoveToSvg = require('../icons/action-move-to.svg') as string;
const ActionMultipropertyLockSvg = require('../icons/action-multiproperty-lock.svg') as string;
const ActionMultipropertyUnlockBordersSvg = require('../icons/action-multiproperty-unlock-borders.svg') as string;
const ActionMultipropertyUnlockCornersSvg = require('../icons/action-multiproperty-unlock-corners.svg') as string;
const ActionNextStateSvg = require('../icons/action-next-state.svg') as string;
const ActionPathBreakSvg = require('../icons/action-path-break.svg') as string;
const ActionPathDefaultSvg = require('../icons/action-path-default.svg') as string;
const ActionPathDifferenceSvg = require('../icons/action-path-difference.svg') as string;
const ActionPathIntersectSvg = require('../icons/action-path-intersect.svg') as string;
const ActionPathSubtractSvg = require('../icons/action-path-subtract.svg') as string;
const ActionPathUnionSvg = require('../icons/action-path-union.svg') as string;
const ActionPreviousStateSvg = require('../icons/action-previous-state.svg') as string;
const ActionRemoveFromGroupSvg = require('../icons/action-remove-from-group.svg') as string;
const ActionSetContentSvg = require('../icons/action-set-content.svg') as string;
const ActionSwitchSvg = require('../icons/action-switch.svg') as string;
const ActionSymbolSyncSvg = require('../icons/action-symbol-sync.svg') as string;
const ActionUnarchiveSvg = require('../icons/action-unarchive.svg') as string;
const AdjustSettingsSvg = require('../icons/adjust-settings.svg') as string;
const AdvancedAnimationSvg = require('../icons/advanced-animation.svg') as string;
const AngleSvg = require('../icons/angle.svg') as string;
const ArrowAxisSvg = require('../icons/arrow-axis.svg') as string;
const ArrowEnterSvg = require('../icons/arrow-enter.svg') as string;
const ArrowGoBackSvg = require('../icons/arrow-go-back.svg') as string;
const ArrowPlaySvg = require('../icons/arrow-play.svg') as string;
const ArrowRedoSvg = require('../icons/arrow-redo.svg') as string;
const ArrowRepeatSvg = require('../icons/arrow-repeat.svg') as string;
const ArrowReplaceSvg = require('../icons/arrow-replace.svg') as string;
const ArrowRetrieveSvg = require('../icons/arrow-retrieve.svg') as string;
const ArrowRotateSvg = require('../icons/arrow-rotate.svg') as string;
const ArrowShowSvg = require('../icons/arrow-show.svg') as string;
const ArrowSizeSvg = require('../icons/arrow-size.svg') as string;
const ArrowThinSvg = require('../icons/arrow-thin.svg') as string;
const ArrowUndoSvg = require('../icons/arrow-undo.svg') as string;
const ArrowSvg = require('../icons/arrow.svg') as string;
const BrandAppleSvg = require('../icons/brand-apple.svg') as string;
const BrandGoogleSimpleSvg = require('../icons/brand-google-simple.svg') as string;
const BrandGoogleSvg = require('../icons/brand-google.svg') as string;
const BrandSketchSvg = require('../icons/brand-sketch.svg') as string;
const BrandSlackSvg = require('../icons/brand-slack.svg') as string;
const BrandTwitterSvg = require('../icons/brand-twitter.svg') as string;
const BrandTypekitSvg = require('../icons/brand-typekit.svg') as string;
const BrandUxpinSvg = require('../icons/brand-uxpin.svg') as string;
const BrandWindowsSvg = require('../icons/brand-windows.svg') as string;
const BuildingSvg = require('../icons/building.svg') as string;
const CalendarSvg = require('../icons/calendar.svg') as string;
const ChangelogSvg = require('../icons/changelog.svg') as string;
const ChevronSvg = require('../icons/chevron.svg') as string;
const ClockSvg = require('../icons/clock.svg') as string;
const CodeBlockSvg = require('../icons/code-block.svg') as string;
const CodeInlineSvg = require('../icons/code-inline.svg') as string;
const ColorDropSvg = require('../icons/color-drop.svg') as string;
const ColorsDropperSvg = require('../icons/colors-dropper.svg') as string;
const ColorsSchemesSvg = require('../icons/colors-schemes.svg') as string;
const ColorsSwatchesSvg = require('../icons/colors-swatches.svg') as string;
const ConnectionConnectedSvg = require('../icons/connection-connected.svg') as string;
const ConnectionDisconnectedSvg = require('../icons/connection-disconnected.svg') as string;
const CursorCrosshairSvg = require('../icons/cursor-crosshair.svg') as string;
const CursorDefaultSvg = require('../icons/cursor-default.svg') as string;
const CursorPointerSvg = require('../icons/cursor-pointer.svg') as string;
const DesktopAppSvg = require('../icons/desktop-app.svg') as string;
const DotsSvg = require('../icons/dots.svg') as string;
const ElementsBoxSvg = require('../icons/elements-box.svg') as string;
const ElementsButtonSvg = require('../icons/elements-button.svg') as string;
const ElementsCheckboxSvg = require('../icons/elements-checkbox.svg') as string;
const ElementsCircleSvg = require('../icons/elements-circle.svg') as string;
const ElementsCodeComponentSvg = require('../icons/elements-code-component.svg') as string;
const ElementsElementSvg = require('../icons/elements-element.svg') as string;
const ElementsGenericSvg = require('../icons/elements-generic.svg') as string;
const ElementsGroupingSvg = require('../icons/elements-grouping.svg') as string;
const ElementsHotspotSvg = require('../icons/elements-hotspot.svg') as string;
const ElementsIconSvg = require('../icons/elements-icon.svg') as string;
const ElementsImageSvg = require('../icons/elements-image.svg') as string;
const ElementsInputSvg = require('../icons/elements-input.svg') as string;
const ElementsMultiSelectSvg = require('../icons/elements-multi-select.svg') as string;
const ElementsMultistatesEditSvg = require('../icons/elements-multistates-edit.svg') as string;
const ElementsMultistatesSvg = require('../icons/elements-multistates.svg') as string;
const ElementsPathSvg = require('../icons/elements-path.svg') as string;
const ElementsRadioSvg = require('../icons/elements-radio.svg') as string;
const ElementsSelectListSvg = require('../icons/elements-select-list.svg') as string;
const ElementsSliceSvg = require('../icons/elements-slice.svg') as string;
const ElementsSymbolSvg = require('../icons/elements-symbol.svg') as string;
const ElementsTableSvg = require('../icons/elements-table.svg') as string;
const ElementsTextBlockSvg = require('../icons/elements-text-block.svg') as string;
const ElementsTextElementSvg = require('../icons/elements-text-element.svg') as string;
const ElementsTextareaSvg = require('../icons/elements-textarea.svg') as string;
const ElementsUngroupingSvg = require('../icons/elements-ungrouping.svg') as string;
const ElementsVideoSvg = require('../icons/elements-video.svg') as string;
const EndpointEmptyCircleSvg = require('../icons/endpoint-empty-circle.svg') as string;
const EndpointEmptyRectangleSvg = require('../icons/endpoint-empty-rectangle.svg') as string;
const EndpointEmptyRhombSvg = require('../icons/endpoint-empty-rhomb.svg') as string;
const EndpointEmptyTriangleSvg = require('../icons/endpoint-empty-triangle.svg') as string;
const EndpointFilledArrowSvg = require('../icons/endpoint-filled-arrow.svg') as string;
const EndpointFilledCircleSvg = require('../icons/endpoint-filled-circle.svg') as string;
const EndpointFilledRectangleSvg = require('../icons/endpoint-filled-rectangle.svg') as string;
const EndpointFilledRhombSvg = require('../icons/endpoint-filled-rhomb.svg') as string;
const EndpointFilledTriangleSvg = require('../icons/endpoint-filled-triangle.svg') as string;
const EndpointLineSvg = require('../icons/endpoint-line.svg') as string;
const EndpointMirroredTriangleSvg = require('../icons/endpoint-mirrored-triangle.svg') as string;
const EndpointNoneSvg = require('../icons/endpoint-none.svg') as string;
const EndpointOpenedTriangleSvg = require('../icons/endpoint-opened-triangle.svg') as string;
const ExternalLinkSvg = require('../icons/external-link.svg') as string;
const FeatureAnimationsSvg = require('../icons/feature-animations.svg') as string;
const FeatureApprovalSvg = require('../icons/feature-approval.svg') as string;
const FeatureChatSvg = require('../icons/feature-chat.svg') as string;
const FeatureCommentsSvg = require('../icons/feature-comments.svg') as string;
const FeatureDocumentationSvg = require('../icons/feature-documentation.svg') as string;
const FeatureGridSvg = require('../icons/feature-grid.svg') as string;
const FeatureIterationSvg = require('../icons/feature-iteration.svg') as string;
const FeatureLayersSvg = require('../icons/feature-layers.svg') as string;
const FeatureLivePresentationSvg = require('../icons/feature-live-presentation.svg') as string;
const FeatureMobileSvg = require('../icons/feature-mobile.svg') as string;
const FeatureResponsiveSvg = require('../icons/feature-responsive.svg') as string;
const FeatureSitemapSvg = require('../icons/feature-sitemap.svg') as string;
const FeatureUsabilityTestingSvg = require('../icons/feature-usability-testing.svg') as string;
const FilesDownloadCloudSvg = require('../icons/files-download-cloud.svg') as string;
const FilesUploadSvg = require('../icons/files-upload.svg') as string;
const FolderClosedOutlineSvg = require('../icons/folder-closed-outline.svg') as string;
const FolderClosedSvg = require('../icons/folder-closed.svg') as string;
const FolderOpenedSvg = require('../icons/folder-opened.svg') as string;
const GearSvg = require('../icons/gear.svg') as string;
const HeartSvg = require('../icons/heart.svg') as string;
const InfoSimpleSvg = require('../icons/info-simple.svg') as string;
const InfoWarningSvg = require('../icons/info-warning.svg') as string;
const LaptopSvg = require('../icons/laptop.svg') as string;
const LayoutListSvg = require('../icons/layout-list.svg') as string;
const LayoutMediumTileSvg = require('../icons/layout-medium-tile.svg') as string;
const LayoutSmallTileSvg = require('../icons/layout-small-tile.svg') as string;
const LibrariesDesignLibrariesSvg = require('../icons/libraries-design-libraries.svg') as string;
const LibrariesMoreSvg = require('../icons/libraries-more.svg') as string;
const LibrariesSimpleSvg = require('../icons/libraries-simple.svg') as string;
const LinkChainBreakSvg = require('../icons/link-chain-break.svg') as string;
const LinkChainSvg = require('../icons/link-chain.svg') as string;
const ListIndentationAddSvg = require('../icons/list-indentation-add.svg') as string;
const ListIndentationRemoveSvg = require('../icons/list-indentation-remove.svg') as string;
const ListOrderedSvg = require('../icons/list-ordered.svg') as string;
const ListUnorderedSvg = require('../icons/list-unordered.svg') as string;
const MailSvg = require('../icons/mail.svg') as string;
const MaskSvg = require('../icons/mask.svg') as string;
const MinusOutlineSvg = require('../icons/minus-outline.svg') as string;
const OpacitySvg = require('../icons/opacity.svg') as string;
const OptionsViewSvg = require('../icons/options-view.svg') as string;
const PadlockBrokenSvg = require('../icons/padlock-broken.svg') as string;
const PadlockLockedSvg = require('../icons/padlock-locked.svg') as string;
const PadlockUnlockedSvg = require('../icons/padlock-unlocked.svg') as string;
const PenToolSvg = require('../icons/pen-tool.svg') as string;
const PencilSvg = require('../icons/pencil.svg') as string;
const PiggyBankSvg = require('../icons/piggy-bank.svg') as string;
const PinMapSolidSvg = require('../icons/pin-map-solid.svg') as string;
const PinMapSvg = require('../icons/pin-map.svg') as string;
const PinSimpleSvg = require('../icons/pin-simple.svg') as string;
const PluginsSvg = require('../icons/plugins.svg') as string;
const PlusOutlineSvg = require('../icons/plus-outline.svg') as string;
const PlusSvg = require('../icons/plus.svg') as string;
const QuestionMarkSolidSvg = require('../icons/question-mark-solid.svg') as string;
const QuestionMarkSvg = require('../icons/question-mark.svg') as string;
const ScrollToSvg = require('../icons/scroll-to.svg') as string;
const SearchSvg = require('../icons/search.svg') as string;
const ShapeDiamondSvg = require('../icons/shape-diamond.svg') as string;
const ShapeRhombusSvg = require('../icons/shape-rhombus.svg') as string;
const ShapeStarSvg = require('../icons/shape-star.svg') as string;
const ShapeTriangleRightAngledSvg = require('../icons/shape-triangle-right-angled.svg') as string;
const ShapeTriangleSvg = require('../icons/shape-triangle.svg') as string;
const ShareClosedSvg = require('../icons/share-closed.svg') as string;
const ShareOpenedSvg = require('../icons/share-opened.svg') as string;
const ShoppingCartSvg = require('../icons/shopping-cart.svg') as string;
const SoundMuteSvg = require('../icons/sound-mute.svg') as string;
const SoundUnmuteSvg = require('../icons/sound-unmute.svg') as string;
const StateBaseSvg = require('../icons/state-base.svg') as string;
const StatusApprovedSvg = require('../icons/status-approved.svg') as string;
const StatusPausedSvg = require('../icons/status-paused.svg') as string;
const StatusProgressSvg = require('../icons/status-progress.svg') as string;
const StatusRejectedSvg = require('../icons/status-rejected.svg') as string;
const StatusWaitingSvg = require('../icons/status-waiting.svg') as string;
const StrokeEndButtSvg = require('../icons/stroke-end-butt.svg') as string;
const StrokeEndRoundSvg = require('../icons/stroke-end-round.svg') as string;
const StrokeEndSquareSvg = require('../icons/stroke-end-square.svg') as string;
const StrokeJoinBevelSvg = require('../icons/stroke-join-bevel.svg') as string;
const StrokeJoinMiterSvg = require('../icons/stroke-join-miter.svg') as string;
const StrokeJoinRoundSvg = require('../icons/stroke-join-round.svg') as string;
const StrokePointAsymmetricSvg = require('../icons/stroke-point-asymmetric.svg') as string;
const StrokePointDisconnectedSvg = require('../icons/stroke-point-disconnected.svg') as string;
const StrokePointMirroredSvg = require('../icons/stroke-point-mirrored.svg') as string;
const StrokePointStraightSvg = require('../icons/stroke-point-straight.svg') as string;
const ThunderSvg = require('../icons/thunder.svg') as string;
const TickerSvg = require('../icons/ticker.svg') as string;
const ToggleSvg = require('../icons/toggle.svg') as string;
const TooltipLeftSvg = require('../icons/tooltip-left.svg') as string;
const TooltipTopSvg = require('../icons/tooltip-top.svg') as string;
const TrashSvg = require('../icons/trash.svg') as string;
const TypographyAlignCenterSvg = require('../icons/typography-align-center.svg') as string;
const TypographyAlignJustifySvg = require('../icons/typography-align-justify.svg') as string;
const TypographyAlignLeftSvg = require('../icons/typography-align-left.svg') as string;
const TypographyCustomFontSvg = require('../icons/typography-custom-font.svg') as string;
const TypographyFontSizeSvg = require('../icons/typography-font-size.svg') as string;
const TypographyLetterSpacingSvg = require('../icons/typography-letter-spacing.svg') as string;
const TypographyLineHeightSvg = require('../icons/typography-line-height.svg') as string;
const UserAddSvg = require('../icons/user-add.svg') as string;
const UserSimpleSvg = require('../icons/user-simple.svg') as string;
const VariableSvg = require('../icons/variable.svg') as string;
const VisibilityOutlineHiddenSvg = require('../icons/visibility-outline-hidden.svg') as string;
const VisibilityOutlineVisibleSvg = require('../icons/visibility-outline-visible.svg') as string;
const VisibilitySolidHiddenSvg = require('../icons/visibility-solid-hidden.svg') as string;
const VisibilitySolidVisibleSvg = require('../icons/visibility-solid-visible.svg') as string;
import * as sizes from '../styles/sizes.json';

export interface Props {
  size?:'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
  rotation?:number;
  color?:string;
  // tslint:disable-next-line:max-line-length
  icon:'ActionAddToFavoritesSvg' | 'ActionArchiveSvg' | 'ActionArrangeLeftSvg' | 'ActionArrangeRightSvg' | 'ActionArrangeVerticalCenterSvg' | 'ActionBreakSymbolSvg' | 'ActionChangeProjectGroupSvg' | 'ActionCloneSvg' | 'ActionCloseSvg' | 'ActionDetachingHandlerSvg' | 'ActionDisableSvg' | 'ActionDistributeVerticallySvg' | 'ActionDuplicateSvg' | 'ActionElementAlignCenterSvg' | 'ActionElementAlignSvg' | 'ActionElementFlipSvg' | 'ActionEnableSvg' | 'ActionExitSvg' | 'ActionFullScreenSvg' | 'ActionInsertDataSvg' | 'ActionLogOutSvg' | 'ActionMoveBehindSvg' | 'ActionMoveBySvg' | 'ActionMoveForwardSvg' | 'ActionMoveToBackSvg' | 'ActionMoveToFrontSvg' | 'ActionMoveToSvg' | 'ActionMultipropertyLockSvg' | 'ActionMultipropertyUnlockBordersSvg' | 'ActionMultipropertyUnlockCornersSvg' | 'ActionNextStateSvg' | 'ActionPathBreakSvg' | 'ActionPathDefaultSvg' | 'ActionPathDifferenceSvg' | 'ActionPathIntersectSvg' | 'ActionPathSubtractSvg' | 'ActionPathUnionSvg' | 'ActionPreviousStateSvg' | 'ActionRemoveFromGroupSvg' | 'ActionSetContentSvg' | 'ActionSwitchSvg' | 'ActionSymbolSyncSvg' | 'ActionUnarchiveSvg' | 'AdjustSettingsSvg' | 'AdvancedAnimationSvg' | 'AngleSvg' | 'ArrowAxisSvg' | 'ArrowEnterSvg' | 'ArrowGoBackSvg' | 'ArrowPlaySvg' | 'ArrowRedoSvg' | 'ArrowRepeatSvg' | 'ArrowReplaceSvg' | 'ArrowRetrieveSvg' | 'ArrowRotateSvg' | 'ArrowShowSvg' | 'ArrowSizeSvg' | 'ArrowThinSvg' | 'ArrowUndoSvg' | 'ArrowSvg' | 'BrandAppleSvg' | 'BrandGoogleSimpleSvg' | 'BrandGoogleSvg' | 'BrandSketchSvg' | 'BrandSlackSvg' | 'BrandTwitterSvg' | 'BrandTypekitSvg' | 'BrandUxpinSvg' | 'BrandWindowsSvg' | 'BuildingSvg' | 'CalendarSvg' | 'ChangelogSvg' | 'ChevronSvg' | 'ClockSvg' | 'CodeBlockSvg' | 'CodeInlineSvg' | 'ColorDropSvg' | 'ColorsDropperSvg' | 'ColorsSchemesSvg' | 'ColorsSwatchesSvg' | 'ConnectionConnectedSvg' | 'ConnectionDisconnectedSvg' | 'CursorCrosshairSvg' | 'CursorDefaultSvg' | 'CursorPointerSvg' | 'DesktopAppSvg' | 'DotsSvg' | 'ElementsBoxSvg' | 'ElementsButtonSvg' | 'ElementsCheckboxSvg' | 'ElementsCircleSvg' | 'ElementsCodeComponentSvg' | 'ElementsElementSvg' | 'ElementsGenericSvg' | 'ElementsGroupingSvg' | 'ElementsHotspotSvg' | 'ElementsIconSvg' | 'ElementsImageSvg' | 'ElementsInputSvg' | 'ElementsMultiSelectSvg' | 'ElementsMultistatesEditSvg' | 'ElementsMultistatesSvg' | 'ElementsPathSvg' | 'ElementsRadioSvg' | 'ElementsSelectListSvg' | 'ElementsSliceSvg' | 'ElementsSymbolSvg' | 'ElementsTableSvg' | 'ElementsTextBlockSvg' | 'ElementsTextElementSvg' | 'ElementsTextareaSvg' | 'ElementsUngroupingSvg' | 'ElementsVideoSvg' | 'EndpointEmptyCircleSvg' | 'EndpointEmptyRectangleSvg' | 'EndpointEmptyRhombSvg' | 'EndpointEmptyTriangleSvg' | 'EndpointFilledArrowSvg' | 'EndpointFilledCircleSvg' | 'EndpointFilledRectangleSvg' | 'EndpointFilledRhombSvg' | 'EndpointFilledTriangleSvg' | 'EndpointLineSvg' | 'EndpointMirroredTriangleSvg' | 'EndpointNoneSvg' | 'EndpointOpenedTriangleSvg' | 'ExternalLinkSvg' | 'FeatureAnimationsSvg' | 'FeatureApprovalSvg' | 'FeatureChatSvg' | 'FeatureCommentsSvg' | 'FeatureDocumentationSvg' | 'FeatureGridSvg' | 'FeatureIterationSvg' | 'FeatureLayersSvg' | 'FeatureLivePresentationSvg' | 'FeatureMobileSvg' | 'FeatureResponsiveSvg' | 'FeatureSitemapSvg' | 'FeatureUsabilityTestingSvg' | 'FilesDownloadCloudSvg' | 'FilesUploadSvg' | 'FolderClosedOutlineSvg' | 'FolderClosedSvg' | 'FolderOpenedSvg' | 'GearSvg' | 'HeartSvg' | 'InfoSimpleSvg' | 'InfoWarningSvg' | 'LaptopSvg' | 'LayoutListSvg' | 'LayoutMediumTileSvg' | 'LayoutSmallTileSvg' | 'LibrariesDesignLibrariesSvg' | 'LibrariesMoreSvg' | 'LibrariesSimpleSvg' | 'LinkChainBreakSvg' | 'LinkChainSvg' | 'ListIndentationAddSvg' | 'ListIndentationRemoveSvg' | 'ListOrderedSvg' | 'ListUnorderedSvg' | 'MailSvg' | 'MaskSvg' | 'MinusOutlineSvg' | 'OpacitySvg' | 'OptionsViewSvg' | 'PadlockBrokenSvg' | 'PadlockLockedSvg' | 'PadlockUnlockedSvg' | 'PenToolSvg' | 'PencilSvg' | 'PiggyBankSvg' | 'PinMapSolidSvg' | 'PinMapSvg' | 'PinSimpleSvg' | 'PluginsSvg' | 'PlusOutlineSvg' | 'PlusSvg' | 'QuestionMarkSolidSvg' | 'QuestionMarkSvg' | 'ScrollToSvg' | 'SearchSvg' | 'ShapeDiamondSvg' | 'ShapeRhombusSvg' | 'ShapeStarSvg' | 'ShapeTriangleRightAngledSvg' | 'ShapeTriangleSvg' | 'ShareClosedSvg' | 'ShareOpenedSvg' | 'ShoppingCartSvg' | 'SoundMuteSvg' | 'SoundUnmuteSvg' | 'StateBaseSvg' | 'StatusApprovedSvg' | 'StatusPausedSvg' | 'StatusProgressSvg' | 'StatusRejectedSvg' | 'StatusWaitingSvg' | 'StrokeEndButtSvg' | 'StrokeEndRoundSvg' | 'StrokeEndSquareSvg' | 'StrokeJoinBevelSvg' | 'StrokeJoinMiterSvg' | 'StrokeJoinRoundSvg' | 'StrokePointAsymmetricSvg' | 'StrokePointDisconnectedSvg' | 'StrokePointMirroredSvg' | 'StrokePointStraightSvg' | 'ThunderSvg' | 'TickerSvg' | 'ToggleSvg' | 'TooltipLeftSvg' | 'TooltipTopSvg' | 'TrashSvg' | 'TypographyAlignCenterSvg' | 'TypographyAlignJustifySvg' | 'TypographyAlignLeftSvg' | 'TypographyCustomFontSvg' | 'TypographyFontSizeSvg' | 'TypographyLetterSpacingSvg' | 'TypographyLineHeightSvg' | 'UserAddSvg' | 'UserSimpleSvg' | 'VariableSvg' | 'VisibilityOutlineHiddenSvg' | 'VisibilityOutlineVisibleSvg' | 'VisibilitySolidHiddenSvg' | 'VisibilitySolidVisibleSvg'; 
}

export default function Icon({
  size = 'xs',
  color = '#444',
  icon = 'ActionAddToFavoritesSvg',
}:Props) {
  const getIconSize = (propSize:any) => {
    switch (propSize) {
      case 'xs':
        return `${sizes.xs}px`;
      case 's':
        return `${sizes.s}px`;
      case 'm':
        return `${sizes.m}px`;
      case 'l':
        return `${sizes.l}px`;
      case 'xl':
        return `${sizes.xl}px`;
      case 'xxl':
        return `${sizes.xxl}px`;
      case 'xxxl':
        return `${sizes.xxxl}px`;
      default:
        return `${sizes.xs}px`;
    }
  };

  switch (icon) {
    case 'ActionAddToFavoritesSvg':
      return (
        <ActionAddToFavoritesSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionArchiveSvg':
      return (
        <ActionArchiveSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionArrangeLeftSvg':
      return (
        <ActionArrangeLeftSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionArrangeRightSvg':
      return (
        <ActionArrangeRightSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionArrangeVerticalCenterSvg':
      return (
        <ActionArrangeVerticalCenterSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionBreakSymbolSvg':
      return (
        <ActionBreakSymbolSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionChangeProjectGroupSvg':
      return (
        <ActionChangeProjectGroupSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionCloneSvg':
      return (
        <ActionCloneSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionCloseSvg':
      return (
        <ActionCloseSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionDetachingHandlerSvg':
      return (
        <ActionDetachingHandlerSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionDisableSvg':
      return (
        <ActionDisableSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionDistributeVerticallySvg':
      return (
        <ActionDistributeVerticallySvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionDuplicateSvg':
      return (
        <ActionDuplicateSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionElementAlignCenterSvg':
      return (
        <ActionElementAlignCenterSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionElementAlignSvg':
      return (
        <ActionElementAlignSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionElementFlipSvg':
      return (
        <ActionElementFlipSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionEnableSvg':
      return (
        <ActionEnableSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionExitSvg':
      return (
        <ActionExitSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionFullScreenSvg':
      return (
        <ActionFullScreenSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionInsertDataSvg':
      return (
        <ActionInsertDataSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionLogOutSvg':
      return (
        <ActionLogOutSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionMoveBehindSvg':
      return (
        <ActionMoveBehindSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionMoveBySvg':
      return (
        <ActionMoveBySvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionMoveForwardSvg':
      return (
        <ActionMoveForwardSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionMoveToBackSvg':
      return (
        <ActionMoveToBackSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionMoveToFrontSvg':
      return (
        <ActionMoveToFrontSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionMoveToSvg':
      return (
        <ActionMoveToSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionMultipropertyLockSvg':
      return (
        <ActionMultipropertyLockSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionMultipropertyUnlockBordersSvg':
      return (
        <ActionMultipropertyUnlockBordersSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionMultipropertyUnlockCornersSvg':
      return (
        <ActionMultipropertyUnlockCornersSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionNextStateSvg':
      return (
        <ActionNextStateSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionPathBreakSvg':
      return (
        <ActionPathBreakSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionPathDefaultSvg':
      return (
        <ActionPathDefaultSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionPathDifferenceSvg':
      return (
        <ActionPathDifferenceSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionPathIntersectSvg':
      return (
        <ActionPathIntersectSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionPathSubtractSvg':
      return (
        <ActionPathSubtractSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionPathUnionSvg':
      return (
        <ActionPathUnionSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionPreviousStateSvg':
      return (
        <ActionPreviousStateSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionRemoveFromGroupSvg':
      return (
        <ActionRemoveFromGroupSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionSetContentSvg':
      return (
        <ActionSetContentSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionSwitchSvg':
      return (
        <ActionSwitchSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionSymbolSyncSvg':
      return (
        <ActionSymbolSyncSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ActionUnarchiveSvg':
      return (
        <ActionUnarchiveSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'AdjustSettingsSvg':
      return (
        <AdjustSettingsSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'AdvancedAnimationSvg':
      return (
        <AdvancedAnimationSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'AngleSvg':
      return (
        <AngleSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ArrowAxisSvg':
      return (
        <ArrowAxisSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ArrowEnterSvg':
      return (
        <ArrowEnterSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ArrowGoBackSvg':
      return (
        <ArrowGoBackSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ArrowPlaySvg':
      return (
        <ArrowPlaySvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ArrowRedoSvg':
      return (
        <ArrowRedoSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ArrowRepeatSvg':
      return (
        <ArrowRepeatSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ArrowReplaceSvg':
      return (
        <ArrowReplaceSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ArrowRetrieveSvg':
      return (
        <ArrowRetrieveSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ArrowRotateSvg':
      return (
        <ArrowRotateSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ArrowShowSvg':
      return (
        <ArrowShowSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ArrowSizeSvg':
      return (
        <ArrowSizeSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ArrowThinSvg':
      return (
        <ArrowThinSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ArrowUndoSvg':
      return (
        <ArrowUndoSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ArrowSvg':
      return (
        <ArrowSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'BrandAppleSvg':
      return (
        <BrandAppleSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'BrandGoogleSimpleSvg':
      return (
        <BrandGoogleSimpleSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'BrandGoogleSvg':
      return (
        <BrandGoogleSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'BrandSketchSvg':
      return (
        <BrandSketchSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'BrandSlackSvg':
      return (
        <BrandSlackSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'BrandTwitterSvg':
      return (
        <BrandTwitterSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'BrandTypekitSvg':
      return (
        <BrandTypekitSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'BrandUxpinSvg':
      return (
        <BrandUxpinSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'BrandWindowsSvg':
      return (
        <BrandWindowsSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'BuildingSvg':
      return (
        <BuildingSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'CalendarSvg':
      return (
        <CalendarSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ChangelogSvg':
      return (
        <ChangelogSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ChevronSvg':
      return (
        <ChevronSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ClockSvg':
      return (
        <ClockSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'CodeBlockSvg':
      return (
        <CodeBlockSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'CodeInlineSvg':
      return (
        <CodeInlineSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ColorDropSvg':
      return (
        <ColorDropSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ColorsDropperSvg':
      return (
        <ColorsDropperSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ColorsSchemesSvg':
      return (
        <ColorsSchemesSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ColorsSwatchesSvg':
      return (
        <ColorsSwatchesSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ConnectionConnectedSvg':
      return (
        <ConnectionConnectedSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ConnectionDisconnectedSvg':
      return (
        <ConnectionDisconnectedSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'CursorCrosshairSvg':
      return (
        <CursorCrosshairSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'CursorDefaultSvg':
      return (
        <CursorDefaultSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'CursorPointerSvg':
      return (
        <CursorPointerSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'DesktopAppSvg':
      return (
        <DesktopAppSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'DotsSvg':
      return (
        <DotsSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ElementsBoxSvg':
      return (
        <ElementsBoxSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ElementsButtonSvg':
      return (
        <ElementsButtonSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ElementsCheckboxSvg':
      return (
        <ElementsCheckboxSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ElementsCircleSvg':
      return (
        <ElementsCircleSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ElementsCodeComponentSvg':
      return (
        <ElementsCodeComponentSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ElementsElementSvg':
      return (
        <ElementsElementSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ElementsGenericSvg':
      return (
        <ElementsGenericSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ElementsGroupingSvg':
      return (
        <ElementsGroupingSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ElementsHotspotSvg':
      return (
        <ElementsHotspotSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ElementsIconSvg':
      return (
        <ElementsIconSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ElementsImageSvg':
      return (
        <ElementsImageSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ElementsInputSvg':
      return (
        <ElementsInputSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ElementsMultiSelectSvg':
      return (
        <ElementsMultiSelectSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ElementsMultistatesEditSvg':
      return (
        <ElementsMultistatesEditSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ElementsMultistatesSvg':
      return (
        <ElementsMultistatesSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ElementsPathSvg':
      return (
        <ElementsPathSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ElementsRadioSvg':
      return (
        <ElementsRadioSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ElementsSelectListSvg':
      return (
        <ElementsSelectListSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ElementsSliceSvg':
      return (
        <ElementsSliceSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ElementsSymbolSvg':
      return (
        <ElementsSymbolSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ElementsTableSvg':
      return (
        <ElementsTableSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ElementsTextBlockSvg':
      return (
        <ElementsTextBlockSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ElementsTextElementSvg':
      return (
        <ElementsTextElementSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ElementsTextareaSvg':
      return (
        <ElementsTextareaSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ElementsUngroupingSvg':
      return (
        <ElementsUngroupingSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ElementsVideoSvg':
      return (
        <ElementsVideoSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'EndpointEmptyCircleSvg':
      return (
        <EndpointEmptyCircleSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'EndpointEmptyRectangleSvg':
      return (
        <EndpointEmptyRectangleSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'EndpointEmptyRhombSvg':
      return (
        <EndpointEmptyRhombSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'EndpointEmptyTriangleSvg':
      return (
        <EndpointEmptyTriangleSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'EndpointFilledArrowSvg':
      return (
        <EndpointFilledArrowSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'EndpointFilledCircleSvg':
      return (
        <EndpointFilledCircleSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'EndpointFilledRectangleSvg':
      return (
        <EndpointFilledRectangleSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'EndpointFilledRhombSvg':
      return (
        <EndpointFilledRhombSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'EndpointFilledTriangleSvg':
      return (
        <EndpointFilledTriangleSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'EndpointLineSvg':
      return (
        <EndpointLineSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'EndpointMirroredTriangleSvg':
      return (
        <EndpointMirroredTriangleSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'EndpointNoneSvg':
      return (
        <EndpointNoneSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'EndpointOpenedTriangleSvg':
      return (
        <EndpointOpenedTriangleSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ExternalLinkSvg':
      return (
        <ExternalLinkSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'FeatureAnimationsSvg':
      return (
        <FeatureAnimationsSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'FeatureApprovalSvg':
      return (
        <FeatureApprovalSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'FeatureChatSvg':
      return (
        <FeatureChatSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'FeatureCommentsSvg':
      return (
        <FeatureCommentsSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'FeatureDocumentationSvg':
      return (
        <FeatureDocumentationSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'FeatureGridSvg':
      return (
        <FeatureGridSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'FeatureIterationSvg':
      return (
        <FeatureIterationSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'FeatureLayersSvg':
      return (
        <FeatureLayersSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'FeatureLivePresentationSvg':
      return (
        <FeatureLivePresentationSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'FeatureMobileSvg':
      return (
        <FeatureMobileSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'FeatureResponsiveSvg':
      return (
        <FeatureResponsiveSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'FeatureSitemapSvg':
      return (
        <FeatureSitemapSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'FeatureUsabilityTestingSvg':
      return (
        <FeatureUsabilityTestingSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'FilesDownloadCloudSvg':
      return (
        <FilesDownloadCloudSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'FilesUploadSvg':
      return (
        <FilesUploadSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'FolderClosedOutlineSvg':
      return (
        <FolderClosedOutlineSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'FolderClosedSvg':
      return (
        <FolderClosedSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'FolderOpenedSvg':
      return (
        <FolderOpenedSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'GearSvg':
      return (
        <GearSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'HeartSvg':
      return (
        <HeartSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'InfoSimpleSvg':
      return (
        <InfoSimpleSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'InfoWarningSvg':
      return (
        <InfoWarningSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'LaptopSvg':
      return (
        <LaptopSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'LayoutListSvg':
      return (
        <LayoutListSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'LayoutMediumTileSvg':
      return (
        <LayoutMediumTileSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'LayoutSmallTileSvg':
      return (
        <LayoutSmallTileSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'LibrariesDesignLibrariesSvg':
      return (
        <LibrariesDesignLibrariesSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'LibrariesMoreSvg':
      return (
        <LibrariesMoreSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'LibrariesSimpleSvg':
      return (
        <LibrariesSimpleSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'LinkChainBreakSvg':
      return (
        <LinkChainBreakSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'LinkChainSvg':
      return (
        <LinkChainSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ListIndentationAddSvg':
      return (
        <ListIndentationAddSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ListIndentationRemoveSvg':
      return (
        <ListIndentationRemoveSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ListOrderedSvg':
      return (
        <ListOrderedSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ListUnorderedSvg':
      return (
        <ListUnorderedSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'MailSvg':
      return (
        <MailSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'MaskSvg':
      return (
        <MaskSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'MinusOutlineSvg':
      return (
        <MinusOutlineSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'OpacitySvg':
      return (
        <OpacitySvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'OptionsViewSvg':
      return (
        <OptionsViewSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'PadlockBrokenSvg':
      return (
        <PadlockBrokenSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'PadlockLockedSvg':
      return (
        <PadlockLockedSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'PadlockUnlockedSvg':
      return (
        <PadlockUnlockedSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'PenToolSvg':
      return (
        <PenToolSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'PencilSvg':
      return (
        <PencilSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'PiggyBankSvg':
      return (
        <PiggyBankSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'PinMapSolidSvg':
      return (
        <PinMapSolidSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'PinMapSvg':
      return (
        <PinMapSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'PinSimpleSvg':
      return (
        <PinSimpleSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'PluginsSvg':
      return (
        <PluginsSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'PlusOutlineSvg':
      return (
        <PlusOutlineSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'PlusSvg':
      return (
        <PlusSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'QuestionMarkSolidSvg':
      return (
        <QuestionMarkSolidSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'QuestionMarkSvg':
      return (
        <QuestionMarkSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ScrollToSvg':
      return (
        <ScrollToSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'SearchSvg':
      return (
        <SearchSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ShapeDiamondSvg':
      return (
        <ShapeDiamondSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ShapeRhombusSvg':
      return (
        <ShapeRhombusSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ShapeStarSvg':
      return (
        <ShapeStarSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ShapeTriangleRightAngledSvg':
      return (
        <ShapeTriangleRightAngledSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ShapeTriangleSvg':
      return (
        <ShapeTriangleSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ShareClosedSvg':
      return (
        <ShareClosedSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ShareOpenedSvg':
      return (
        <ShareOpenedSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ShoppingCartSvg':
      return (
        <ShoppingCartSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'SoundMuteSvg':
      return (
        <SoundMuteSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'SoundUnmuteSvg':
      return (
        <SoundUnmuteSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'StateBaseSvg':
      return (
        <StateBaseSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'StatusApprovedSvg':
      return (
        <StatusApprovedSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'StatusPausedSvg':
      return (
        <StatusPausedSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'StatusProgressSvg':
      return (
        <StatusProgressSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'StatusRejectedSvg':
      return (
        <StatusRejectedSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'StatusWaitingSvg':
      return (
        <StatusWaitingSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'StrokeEndButtSvg':
      return (
        <StrokeEndButtSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'StrokeEndRoundSvg':
      return (
        <StrokeEndRoundSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'StrokeEndSquareSvg':
      return (
        <StrokeEndSquareSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'StrokeJoinBevelSvg':
      return (
        <StrokeJoinBevelSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'StrokeJoinMiterSvg':
      return (
        <StrokeJoinMiterSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'StrokeJoinRoundSvg':
      return (
        <StrokeJoinRoundSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'StrokePointAsymmetricSvg':
      return (
        <StrokePointAsymmetricSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'StrokePointDisconnectedSvg':
      return (
        <StrokePointDisconnectedSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'StrokePointMirroredSvg':
      return (
        <StrokePointMirroredSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'StrokePointStraightSvg':
      return (
        <StrokePointStraightSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ThunderSvg':
      return (
        <ThunderSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'TickerSvg':
      return (
        <TickerSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'ToggleSvg':
      return (
        <ToggleSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'TooltipLeftSvg':
      return (
        <TooltipLeftSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'TooltipTopSvg':
      return (
        <TooltipTopSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'TrashSvg':
      return (
        <TrashSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'TypographyAlignCenterSvg':
      return (
        <TypographyAlignCenterSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'TypographyAlignJustifySvg':
      return (
        <TypographyAlignJustifySvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'TypographyAlignLeftSvg':
      return (
        <TypographyAlignLeftSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'TypographyCustomFontSvg':
      return (
        <TypographyCustomFontSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'TypographyFontSizeSvg':
      return (
        <TypographyFontSizeSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'TypographyLetterSpacingSvg':
      return (
        <TypographyLetterSpacingSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'TypographyLineHeightSvg':
      return (
        <TypographyLineHeightSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'UserAddSvg':
      return (
        <UserAddSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'UserSimpleSvg':
      return (
        <UserSimpleSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'VariableSvg':
      return (
        <VariableSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'VisibilityOutlineHiddenSvg':
      return (
        <VisibilityOutlineHiddenSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'VisibilityOutlineVisibleSvg':
      return (
        <VisibilityOutlineVisibleSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'VisibilitySolidHiddenSvg':
      return (
        <VisibilitySolidHiddenSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
    case 'VisibilitySolidVisibleSvg':
      return (
        <VisibilitySolidVisibleSvg
          fill={color}
          width={getIconSize(size)}
          height={getIconSize(size)}
        />
      );
  }
}
