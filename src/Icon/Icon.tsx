import * as React from 'react';
// tslint:disable:variable-name
// tslint:disable:no-var-requires
// tslint:disable:max-line-length
const ActionAddToFavoritesSvg:string = require('../icons/action-add-to-favorites.svg') as string;
const ActionArchiveSvg:string = require('../icons/action-archive.svg') as string;
const ActionArrangeLeftSvg:string = require('../icons/action-arrange-left.svg') as string;
const ActionArrangeRightSvg:string = require('../icons/action-arrange-right.svg') as string;
const ActionArrangeVerticalCenterSvg:string = require('../icons/action-arrange-vertical-center.svg') as string;
const ActionBreakSymbolSvg:string = require('../icons/action-break-symbol.svg') as string;
const ActionChangeProjectGroupSvg:string = require('../icons/action-change-project-group.svg') as string;
const ActionCloneSvg:string = require('../icons/action-clone.svg') as string;
const ActionCloseSvg:string = require('../icons/action-close.svg') as string;
const ActionDetachingHandlerSvg:string = require('../icons/action-detaching-handler.svg') as string;
const ActionDisableSvg:string = require('../icons/action-disable.svg') as string;
const ActionDistributeVerticallySvg:string = require('../icons/action-distribute-vertically.svg') as string;
const ActionDuplicateSvg:string = require('../icons/action-duplicate.svg') as string;
const ActionElementAlignCenterSvg:string = require('../icons/action-element-align-center.svg') as string;
const ActionElementAlignSvg:string = require('../icons/action-element-align.svg') as string;
const ActionElementFlipSvg:string = require('../icons/action-element-flip.svg') as string;
const ActionEnableSvg:string = require('../icons/action-enable.svg') as string;
const ActionExitSvg:string = require('../icons/action-exit.svg') as string;
const ActionFullScreenSvg:string = require('../icons/action-full-screen.svg') as string;
const ActionInsertDataSvg:string = require('../icons/action-insert-data.svg') as string;
const ActionLogOutSvg:string = require('../icons/action-log-out.svg') as string;
const ActionMoveBehindSvg:string = require('../icons/action-move-behind.svg') as string;
const ActionMoveBySvg:string = require('../icons/action-move-by.svg') as string;
const ActionMoveForwardSvg:string = require('../icons/action-move-forward.svg') as string;
const ActionMoveToBackSvg:string = require('../icons/action-move-to-back.svg') as string;
const ActionMoveToFrontSvg:string = require('../icons/action-move-to-front.svg') as string;
const ActionMoveToSvg:string = require('../icons/action-move-to.svg') as string;
const ActionMultipropertyLockSvg:string = require('../icons/action-multiproperty-lock.svg') as string;
const ActionMultipropertyUnlockBordersSvg:string = require('../icons/action-multiproperty-unlock-borders.svg') as string;
const ActionMultipropertyUnlockCornersSvg:string = require('../icons/action-multiproperty-unlock-corners.svg') as string;
const ActionNextStateSvg:string = require('../icons/action-next-state.svg') as string;
const ActionPathBreakSvg:string = require('../icons/action-path-break.svg') as string;
const ActionPathDefaultSvg:string = require('../icons/action-path-default.svg') as string;
const ActionPathDifferenceSvg:string = require('../icons/action-path-difference.svg') as string;
const ActionPathIntersectSvg:string = require('../icons/action-path-intersect.svg') as string;
const ActionPathSubtractSvg:string = require('../icons/action-path-subtract.svg') as string;
const ActionPathUnionSvg:string = require('../icons/action-path-union.svg') as string;
const ActionPreviousStateSvg:string = require('../icons/action-previous-state.svg') as string;
const ActionRemoveFromGroupSvg:string = require('../icons/action-remove-from-group.svg') as string;
const ActionSetContentSvg:string = require('../icons/action-set-content.svg') as string;
const ActionSwitchSvg:string = require('../icons/action-switch.svg') as string;
const ActionSymbolSyncSvg:string = require('../icons/action-symbol-sync.svg') as string;
const ActionUnarchiveSvg:string = require('../icons/action-unarchive.svg') as string;
const AdjustSettingsSvg:string = require('../icons/adjust-settings.svg') as string;
const AdvancedAnimationSvg:string = require('../icons/advanced-animation.svg') as string;
const AngleSvg:string = require('../icons/angle.svg') as string;
const ArrowAxisSvg:string = require('../icons/arrow-axis.svg') as string;
const ArrowEnterSvg:string = require('../icons/arrow-enter.svg') as string;
const ArrowGoBackSvg:string = require('../icons/arrow-go-back.svg') as string;
const ArrowPlaySvg:string = require('../icons/arrow-play.svg') as string;
const ArrowRedoSvg:string = require('../icons/arrow-redo.svg') as string;
const ArrowRepeatSvg:string = require('../icons/arrow-repeat.svg') as string;
const ArrowReplaceSvg:string = require('../icons/arrow-replace.svg') as string;
const ArrowRetrieveSvg:string = require('../icons/arrow-retrieve.svg') as string;
const ArrowRotateSvg:string = require('../icons/arrow-rotate.svg') as string;
const ArrowShowSvg:string = require('../icons/arrow-show.svg') as string;
const ArrowSizeSvg:string = require('../icons/arrow-size.svg') as string;
const ArrowThinSvg:string = require('../icons/arrow-thin.svg') as string;
const ArrowUndoSvg:string = require('../icons/arrow-undo.svg') as string;
const ArrowSvg:string = require('../icons/arrow.svg') as string;
const BrandAppleSvg:string = require('../icons/brand-apple.svg') as string;
const BrandGoogleSimpleSvg:string = require('../icons/brand-google-simple.svg') as string;
const BrandGoogleSvg:string = require('../icons/brand-google.svg') as string;
const BrandSketchSvg:string = require('../icons/brand-sketch.svg') as string;
const BrandSlackSvg:string = require('../icons/brand-slack.svg') as string;
const BrandTwitterSvg:string = require('../icons/brand-twitter.svg') as string;
const BrandTypekitSvg:string = require('../icons/brand-typekit.svg') as string;
const BrandUxpinSvg:string = require('../icons/brand-uxpin.svg') as string;
const BrandWindowsSvg:string = require('../icons/brand-windows.svg') as string;
const BuildingSvg:string = require('../icons/building.svg') as string;
const CalendarSvg:string = require('../icons/calendar.svg') as string;
const ChangelogSvg:string = require('../icons/changelog.svg') as string;
const ChevronSvg:string = require('../icons/chevron.svg') as string;
const ClockSvg:string = require('../icons/clock.svg') as string;
const CodeBlockSvg:string = require('../icons/code-block.svg') as string;
const CodeInlineSvg:string = require('../icons/code-inline.svg') as string;
const ColorDropSvg:string = require('../icons/color-drop.svg') as string;
const ColorsDropperSvg:string = require('../icons/colors-dropper.svg') as string;
const ColorsSchemesSvg:string = require('../icons/colors-schemes.svg') as string;
const ColorsSwatchesSvg:string = require('../icons/colors-swatches.svg') as string;
const ConnectionConnectedSvg:string = require('../icons/connection-connected.svg') as string;
const ConnectionDisconnectedSvg:string = require('../icons/connection-disconnected.svg') as string;
const CursorCrosshairSvg:string = require('../icons/cursor-crosshair.svg') as string;
const CursorDefaultSvg:string = require('../icons/cursor-default.svg') as string;
const CursorPointerSvg:string = require('../icons/cursor-pointer.svg') as string;
const DesktopAppSvg:string = require('../icons/desktop-app.svg') as string;
const DotsSvg:string = require('../icons/dots.svg') as string;
const ElementsBoxSvg:string = require('../icons/elements-box.svg') as string;
const ElementsButtonSvg:string = require('../icons/elements-button.svg') as string;
const ElementsCheckboxSvg:string = require('../icons/elements-checkbox.svg') as string;
const ElementsCircleSvg:string = require('../icons/elements-circle.svg') as string;
const ElementsCodeComponentSvg:string = require('../icons/elements-code-component.svg') as string;
const ElementsElementSvg:string = require('../icons/elements-element.svg') as string;
const ElementsGenericSvg:string = require('../icons/elements-generic.svg') as string;
const ElementsGroupingSvg:string = require('../icons/elements-grouping.svg') as string;
const ElementsHotspotSvg:string = require('../icons/elements-hotspot.svg') as string;
const ElementsIconSvg:string = require('../icons/elements-icon.svg') as string;
const ElementsImageSvg:string = require('../icons/elements-image.svg') as string;
const ElementsInputSvg:string = require('../icons/elements-input.svg') as string;
const ElementsMultiSelectSvg:string = require('../icons/elements-multi-select.svg') as string;
const ElementsMultistatesEditSvg:string = require('../icons/elements-multistates-edit.svg') as string;
const ElementsMultistatesSvg:string = require('../icons/elements-multistates.svg') as string;
const ElementsPathSvg:string = require('../icons/elements-path.svg') as string;
const ElementsRadioSvg:string = require('../icons/elements-radio.svg') as string;
const ElementsSelectListSvg:string = require('../icons/elements-select-list.svg') as string;
const ElementsSliceSvg:string = require('../icons/elements-slice.svg') as string;
const ElementsSymbolSvg:string = require('../icons/elements-symbol.svg') as string;
const ElementsTableSvg:string = require('../icons/elements-table.svg') as string;
const ElementsTextBlockSvg:string = require('../icons/elements-text-block.svg') as string;
const ElementsTextElementSvg:string = require('../icons/elements-text-element.svg') as string;
const ElementsTextareaSvg:string = require('../icons/elements-textarea.svg') as string;
const ElementsUngroupingSvg:string = require('../icons/elements-ungrouping.svg') as string;
const ElementsVideoSvg:string = require('../icons/elements-video.svg') as string;
const EndpointEmptyCircleSvg:string = require('../icons/endpoint-empty-circle.svg') as string;
const EndpointEmptyRectangleSvg:string = require('../icons/endpoint-empty-rectangle.svg') as string;
const EndpointEmptyRhombSvg:string = require('../icons/endpoint-empty-rhomb.svg') as string;
const EndpointEmptyTriangleSvg:string = require('../icons/endpoint-empty-triangle.svg') as string;
const EndpointFilledArrowSvg:string = require('../icons/endpoint-filled-arrow.svg') as string;
const EndpointFilledCircleSvg:string = require('../icons/endpoint-filled-circle.svg') as string;
const EndpointFilledRectangleSvg:string = require('../icons/endpoint-filled-rectangle.svg') as string;
const EndpointFilledRhombSvg:string = require('../icons/endpoint-filled-rhomb.svg') as string;
const EndpointFilledTriangleSvg:string = require('../icons/endpoint-filled-triangle.svg') as string;
const EndpointLineSvg:string = require('../icons/endpoint-line.svg') as string;
const EndpointMirroredTriangleSvg:string = require('../icons/endpoint-mirrored-triangle.svg') as string;
const EndpointNoneSvg:string = require('../icons/endpoint-none.svg') as string;
const EndpointOpenedTriangleSvg:string = require('../icons/endpoint-opened-triangle.svg') as string;
const ExternalLinkSvg:string = require('../icons/external-link.svg') as string;
const FeatureAnimationsSvg:string = require('../icons/feature-animations.svg') as string;
const FeatureApprovalSvg:string = require('../icons/feature-approval.svg') as string;
const FeatureChatSvg:string = require('../icons/feature-chat.svg') as string;
const FeatureCommentsSvg:string = require('../icons/feature-comments.svg') as string;
const FeatureDocumentationSvg:string = require('../icons/feature-documentation.svg') as string;
const FeatureGridSvg:string = require('../icons/feature-grid.svg') as string;
const FeatureIterationSvg:string = require('../icons/feature-iteration.svg') as string;
const FeatureLayersSvg:string = require('../icons/feature-layers.svg') as string;
const FeatureLivePresentationSvg:string = require('../icons/feature-live-presentation.svg') as string;
const FeatureMobileSvg:string = require('../icons/feature-mobile.svg') as string;
const FeatureResponsiveSvg:string = require('../icons/feature-responsive.svg') as string;
const FeatureSitemapSvg:string = require('../icons/feature-sitemap.svg') as string;
const FeatureUsabilityTestingSvg:string = require('../icons/feature-usability-testing.svg') as string;
const FilesDownloadCloudSvg:string = require('../icons/files-download-cloud.svg') as string;
const FilesUploadSvg:string = require('../icons/files-upload.svg') as string;
const FolderClosedOutlineSvg:string = require('../icons/folder-closed-outline.svg') as string;
const FolderClosedSvg:string = require('../icons/folder-closed.svg') as string;
const FolderOpenedSvg:string = require('../icons/folder-opened.svg') as string;
const GearSvg:string = require('../icons/gear.svg') as string;
const HeartSvg:string = require('../icons/heart.svg') as string;
const InfoSimpleSvg:string = require('../icons/info-simple.svg') as string;
const InfoWarningSvg:string = require('../icons/info-warning.svg') as string;
const LaptopSvg:string = require('../icons/laptop.svg') as string;
const LayoutListSvg:string = require('../icons/layout-list.svg') as string;
const LayoutMediumTileSvg:string = require('../icons/layout-medium-tile.svg') as string;
const LayoutSmallTileSvg:string = require('../icons/layout-small-tile.svg') as string;
const LibrariesDesignLibrariesSvg:string = require('../icons/libraries-design-libraries.svg') as string;
const LibrariesMoreSvg:string = require('../icons/libraries-more.svg') as string;
const LibrariesSimpleSvg:string = require('../icons/libraries-simple.svg') as string;
const LinkChainBreakSvg:string = require('../icons/link-chain-break.svg') as string;
const LinkChainSvg:string = require('../icons/link-chain.svg') as string;
const ListIndentationAddSvg:string = require('../icons/list-indentation-add.svg') as string;
const ListIndentationRemoveSvg:string = require('../icons/list-indentation-remove.svg') as string;
const ListOrderedSvg:string = require('../icons/list-ordered.svg') as string;
const ListUnorderedSvg:string = require('../icons/list-unordered.svg') as string;
const MailSvg:string = require('../icons/mail.svg') as string;
const MaskSvg:string = require('../icons/mask.svg') as string;
const MinusOutlineSvg:string = require('../icons/minus-outline.svg') as string;
const OpacitySvg:string = require('../icons/opacity.svg') as string;
const OptionsViewSvg:string = require('../icons/options-view.svg') as string;
const PadlockBrokenSvg:string = require('../icons/padlock-broken.svg') as string;
const PadlockLockedSvg:string = require('../icons/padlock-locked.svg') as string;
const PadlockUnlockedSvg:string = require('../icons/padlock-unlocked.svg') as string;
const PenToolSvg:string = require('../icons/pen-tool.svg') as string;
const PencilSvg:string = require('../icons/pencil.svg') as string;
const PiggyBankSvg:string = require('../icons/piggy-bank.svg') as string;
const PinMapSolidSvg:string = require('../icons/pin-map-solid.svg') as string;
const PinMapSvg:string = require('../icons/pin-map.svg') as string;
const PinSimpleSvg:string = require('../icons/pin-simple.svg') as string;
const PluginsSvg:string = require('../icons/plugins.svg') as string;
const PlusOutlineSvg:string = require('../icons/plus-outline.svg') as string;
const PlusSvg:string = require('../icons/plus.svg') as string;
const QuestionMarkSolidSvg:string = require('../icons/question-mark-solid.svg') as string;
const QuestionMarkSvg:string = require('../icons/question-mark.svg') as string;
const ScrollToSvg:string = require('../icons/scroll-to.svg') as string;
const SearchSvg:string = require('../icons/search.svg') as string;
const ShapeDiamondSvg:string = require('../icons/shape-diamond.svg') as string;
const ShapeRhombusSvg:string = require('../icons/shape-rhombus.svg') as string;
const ShapeStarSvg:string = require('../icons/shape-star.svg') as string;
const ShapeTriangleRightAngledSvg:string = require('../icons/shape-triangle-right-angled.svg') as string;
const ShapeTriangleSvg:string = require('../icons/shape-triangle.svg') as string;
const ShareClosedSvg:string = require('../icons/share-closed.svg') as string;
const ShareOpenedSvg:string = require('../icons/share-opened.svg') as string;
const ShoppingCartSvg:string = require('../icons/shopping-cart.svg') as string;
const SoundMuteSvg:string = require('../icons/sound-mute.svg') as string;
const SoundUnmuteSvg:string = require('../icons/sound-unmute.svg') as string;
const StateBaseSvg:string = require('../icons/state-base.svg') as string;
const StatusApprovedSvg:string = require('../icons/status-approved.svg') as string;
const StatusPausedSvg:string = require('../icons/status-paused.svg') as string;
const StatusProgressSvg:string = require('../icons/status-progress.svg') as string;
const StatusRejectedSvg:string = require('../icons/status-rejected.svg') as string;
const StatusWaitingSvg:string = require('../icons/status-waiting.svg') as string;
const StrokeEndButtSvg:string = require('../icons/stroke-end-butt.svg') as string;
const StrokeEndRoundSvg:string = require('../icons/stroke-end-round.svg') as string;
const StrokeEndSquareSvg:string = require('../icons/stroke-end-square.svg') as string;
const StrokeJoinBevelSvg:string = require('../icons/stroke-join-bevel.svg') as string;
const StrokeJoinMiterSvg:string = require('../icons/stroke-join-miter.svg') as string;
const StrokeJoinRoundSvg:string = require('../icons/stroke-join-round.svg') as string;
const StrokePointAsymmetricSvg:string = require('../icons/stroke-point-asymmetric.svg') as string;
const StrokePointDisconnectedSvg:string = require('../icons/stroke-point-disconnected.svg') as string;
const StrokePointMirroredSvg:string = require('../icons/stroke-point-mirrored.svg') as string;
const StrokePointStraightSvg:string = require('../icons/stroke-point-straight.svg') as string;
const ThunderSvg:string = require('../icons/thunder.svg') as string;
const TickerSvg:string = require('../icons/ticker.svg') as string;
const ToggleSvg:string = require('../icons/toggle.svg') as string;
const TooltipLeftSvg:string = require('../icons/tooltip-left.svg') as string;
const TooltipTopSvg:string = require('../icons/tooltip-top.svg') as string;
const TrashSvg:string = require('../icons/trash.svg') as string;
const TypographyAlignCenterSvg:string = require('../icons/typography-align-center.svg') as string;
const TypographyAlignJustifySvg:string = require('../icons/typography-align-justify.svg') as string;
const TypographyAlignLeftSvg:string = require('../icons/typography-align-left.svg') as string;
const TypographyCustomFontSvg:string = require('../icons/typography-custom-font.svg') as string;
const TypographyFontSizeSvg:string = require('../icons/typography-font-size.svg') as string;
const TypographyLetterSpacingSvg:string = require('../icons/typography-letter-spacing.svg') as string;
const TypographyLineHeightSvg:string = require('../icons/typography-line-height.svg') as string;
const UserAddSvg:string = require('../icons/user-add.svg') as string;
const UserSimpleSvg:string = require('../icons/user-simple.svg') as string;
const VariableSvg:string = require('../icons/variable.svg') as string;
const VisibilityOutlineHiddenSvg:string = require('../icons/visibility-outline-hidden.svg') as string;
const VisibilityOutlineVisibleSvg:string = require('../icons/visibility-outline-visible.svg') as string;
const VisibilitySolidHiddenSvg:string = require('../icons/visibility-solid-hidden.svg') as string;
const VisibilitySolidVisibleSvg:string = require('../icons/visibility-solid-visible.svg') as string;
import * as sizes from '../styles/sizes.json';

export interface Props {
  size?:'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
  color?:string;
  // tslint:disable-next-line:max-line-length
  icon:'ActionAddToFavoritesSvg' | 'ActionArchiveSvg' | 'ActionArrangeLeftSvg' | 'ActionArrangeRightSvg' | 'ActionArrangeVerticalCenterSvg' | 'ActionBreakSymbolSvg' | 'ActionChangeProjectGroupSvg' | 'ActionCloneSvg' | 'ActionCloseSvg' | 'ActionDetachingHandlerSvg' | 'ActionDisableSvg' | 'ActionDistributeVerticallySvg' | 'ActionDuplicateSvg' | 'ActionElementAlignCenterSvg' | 'ActionElementAlignSvg' | 'ActionElementFlipSvg' | 'ActionEnableSvg' | 'ActionExitSvg' | 'ActionFullScreenSvg' | 'ActionInsertDataSvg' | 'ActionLogOutSvg' | 'ActionMoveBehindSvg' | 'ActionMoveBySvg' | 'ActionMoveForwardSvg' | 'ActionMoveToBackSvg' | 'ActionMoveToFrontSvg' | 'ActionMoveToSvg' | 'ActionMultipropertyLockSvg' | 'ActionMultipropertyUnlockBordersSvg' | 'ActionMultipropertyUnlockCornersSvg' | 'ActionNextStateSvg' | 'ActionPathBreakSvg' | 'ActionPathDefaultSvg' | 'ActionPathDifferenceSvg' | 'ActionPathIntersectSvg' | 'ActionPathSubtractSvg' | 'ActionPathUnionSvg' | 'ActionPreviousStateSvg' | 'ActionRemoveFromGroupSvg' | 'ActionSetContentSvg' | 'ActionSwitchSvg' | 'ActionSymbolSyncSvg' | 'ActionUnarchiveSvg' | 'AdjustSettingsSvg' | 'AdvancedAnimationSvg' | 'AngleSvg' | 'ArrowAxisSvg' | 'ArrowEnterSvg' | 'ArrowGoBackSvg' | 'ArrowPlaySvg' | 'ArrowRedoSvg' | 'ArrowRepeatSvg' | 'ArrowReplaceSvg' | 'ArrowRetrieveSvg' | 'ArrowRotateSvg' | 'ArrowShowSvg' | 'ArrowSizeSvg' | 'ArrowThinSvg' | 'ArrowUndoSvg' | 'ArrowSvg' | 'BrandAppleSvg' | 'BrandGoogleSimpleSvg' | 'BrandGoogleSvg' | 'BrandSketchSvg' | 'BrandSlackSvg' | 'BrandTwitterSvg' | 'BrandTypekitSvg' | 'BrandUxpinSvg' | 'BrandWindowsSvg' | 'BuildingSvg' | 'CalendarSvg' | 'ChangelogSvg' | 'ChevronSvg' | 'ClockSvg' | 'CodeBlockSvg' | 'CodeInlineSvg' | 'ColorDropSvg' | 'ColorsDropperSvg' | 'ColorsSchemesSvg' | 'ColorsSwatchesSvg' | 'ConnectionConnectedSvg' | 'ConnectionDisconnectedSvg' | 'CursorCrosshairSvg' | 'CursorDefaultSvg' | 'CursorPointerSvg' | 'DesktopAppSvg' | 'DotsSvg' | 'ElementsBoxSvg' | 'ElementsButtonSvg' | 'ElementsCheckboxSvg' | 'ElementsCircleSvg' | 'ElementsCodeComponentSvg' | 'ElementsElementSvg' | 'ElementsGenericSvg' | 'ElementsGroupingSvg' | 'ElementsHotspotSvg' | 'ElementsIconSvg' | 'ElementsImageSvg' | 'ElementsInputSvg' | 'ElementsMultiSelectSvg' | 'ElementsMultistatesEditSvg' | 'ElementsMultistatesSvg' | 'ElementsPathSvg' | 'ElementsRadioSvg' | 'ElementsSelectListSvg' | 'ElementsSliceSvg' | 'ElementsSymbolSvg' | 'ElementsTableSvg' | 'ElementsTextBlockSvg' | 'ElementsTextElementSvg' | 'ElementsTextareaSvg' | 'ElementsUngroupingSvg' | 'ElementsVideoSvg' | 'EndpointEmptyCircleSvg' | 'EndpointEmptyRectangleSvg' | 'EndpointEmptyRhombSvg' | 'EndpointEmptyTriangleSvg' | 'EndpointFilledArrowSvg' | 'EndpointFilledCircleSvg' | 'EndpointFilledRectangleSvg' | 'EndpointFilledRhombSvg' | 'EndpointFilledTriangleSvg' | 'EndpointLineSvg' | 'EndpointMirroredTriangleSvg' | 'EndpointNoneSvg' | 'EndpointOpenedTriangleSvg' | 'ExternalLinkSvg' | 'FeatureAnimationsSvg' | 'FeatureApprovalSvg' | 'FeatureChatSvg' | 'FeatureCommentsSvg' | 'FeatureDocumentationSvg' | 'FeatureGridSvg' | 'FeatureIterationSvg' | 'FeatureLayersSvg' | 'FeatureLivePresentationSvg' | 'FeatureMobileSvg' | 'FeatureResponsiveSvg' | 'FeatureSitemapSvg' | 'FeatureUsabilityTestingSvg' | 'FilesDownloadCloudSvg' | 'FilesUploadSvg' | 'FolderClosedOutlineSvg' | 'FolderClosedSvg' | 'FolderOpenedSvg' | 'GearSvg' | 'HeartSvg' | 'InfoSimpleSvg' | 'InfoWarningSvg' | 'LaptopSvg' | 'LayoutListSvg' | 'LayoutMediumTileSvg' | 'LayoutSmallTileSvg' | 'LibrariesDesignLibrariesSvg' | 'LibrariesMoreSvg' | 'LibrariesSimpleSvg' | 'LinkChainBreakSvg' | 'LinkChainSvg' | 'ListIndentationAddSvg' | 'ListIndentationRemoveSvg' | 'ListOrderedSvg' | 'ListUnorderedSvg' | 'MailSvg' | 'MaskSvg' | 'MinusOutlineSvg' | 'OpacitySvg' | 'OptionsViewSvg' | 'PadlockBrokenSvg' | 'PadlockLockedSvg' | 'PadlockUnlockedSvg' | 'PenToolSvg' | 'PencilSvg' | 'PiggyBankSvg' | 'PinMapSolidSvg' | 'PinMapSvg' | 'PinSimpleSvg' | 'PluginsSvg' | 'PlusOutlineSvg' | 'PlusSvg' | 'QuestionMarkSolidSvg' | 'QuestionMarkSvg' | 'ScrollToSvg' | 'SearchSvg' | 'ShapeDiamondSvg' | 'ShapeRhombusSvg' | 'ShapeStarSvg' | 'ShapeTriangleRightAngledSvg' | 'ShapeTriangleSvg' | 'ShareClosedSvg' | 'ShareOpenedSvg' | 'ShoppingCartSvg' | 'SoundMuteSvg' | 'SoundUnmuteSvg' | 'StateBaseSvg' | 'StatusApprovedSvg' | 'StatusPausedSvg' | 'StatusProgressSvg' | 'StatusRejectedSvg' | 'StatusWaitingSvg' | 'StrokeEndButtSvg' | 'StrokeEndRoundSvg' | 'StrokeEndSquareSvg' | 'StrokeJoinBevelSvg' | 'StrokeJoinMiterSvg' | 'StrokeJoinRoundSvg' | 'StrokePointAsymmetricSvg' | 'StrokePointDisconnectedSvg' | 'StrokePointMirroredSvg' | 'StrokePointStraightSvg' | 'ThunderSvg' | 'TickerSvg' | 'ToggleSvg' | 'TooltipLeftSvg' | 'TooltipTopSvg' | 'TrashSvg' | 'TypographyAlignCenterSvg' | 'TypographyAlignJustifySvg' | 'TypographyAlignLeftSvg' | 'TypographyCustomFontSvg' | 'TypographyFontSizeSvg' | 'TypographyLetterSpacingSvg' | 'TypographyLineHeightSvg' | 'UserAddSvg' | 'UserSimpleSvg' | 'VariableSvg' | 'VisibilityOutlineHiddenSvg' | 'VisibilityOutlineVisibleSvg' | 'VisibilitySolidHiddenSvg' | 'VisibilitySolidVisibleSvg';
}

export default function Icon({
  size = 'xs',
  color = '#444',
  icon = 'ActionAddToFavoritesSvg',
}:Props):JSX.Element {
  // tslint:disable-next-line:typedef
  const getIconSize = (propSize:string):string => {
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
