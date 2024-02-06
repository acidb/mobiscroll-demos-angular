import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MbscModule } from '@mobiscroll/angular';

import { AppComponent as CalendarActivityCalendar } from '../demos/datepicker/calendar/activity-calendar/activity-calendar';
import { AppComponent as CalendarAppointmentBooking } from '../demos/datepicker/calendar/appointment-booking/appointment-booking';
import { AppComponent as CalendarCustomizeMarkedDayShapes } from '../demos/datepicker/calendar/customize-marked-day-shapes/customize-marked-day-shapes';
import { AppComponent as CalendarCustomizingHeader } from '../demos/datepicker/calendar/customizing-header/customizing-header';
import { AppComponent as CalendarDateObjectISO8601Moment } from '../demos/datepicker/calendar/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import { AppComponent as CalendarDatePicker } from '../demos/datepicker/calendar/date-picker/date-picker';
import { AppComponent as CalendarDateTimePicker } from '../demos/datepicker/calendar/date-time-picker/date-time-picker';
import { AppComponent as CalendarDisabledInvalidValues } from '../demos/datepicker/calendar/disabled-invalid-values/disabled-invalid-values';
import { AppComponent as CalendarDotsColorsLabels } from '../demos/datepicker/calendar/dots-colors-labels/dots-colors-labels';
import { AppComponent as CalendarEventHooks } from '../demos/datepicker/calendar/event-hooks/event-hooks';
import { AppComponent as CalendarFormattingReturnValues } from '../demos/datepicker/calendar/formatting-return-values/formatting-return-values';
import { AppComponent as CalendarGregorianJalaliHijri } from '../demos/datepicker/calendar/gregorian-jalali-hijri/gregorian-jalali-hijri';
import { AppComponent as CalendarHalfDayStyling } from '../demos/datepicker/calendar/half-day-styling/half-day-styling';
import { AppComponent as CalendarLocalization } from '../demos/datepicker/calendar/localization/localization';
import { AppComponent as CalendarMinMaxRestrictions } from '../demos/datepicker/calendar/min-max-restrictions/min-max-restrictions';
import { AppComponent as CalendarMobileDesktopDisplay } from '../demos/datepicker/calendar/mobile-desktop-display/mobile-desktop-display';
import { AppComponent as CalendarMobileDesktopUsage } from '../demos/datepicker/calendar/mobile-desktop-usage/mobile-desktop-usage';
import { AppComponent as CalendarMonthChangeDirectionWeekNumbersOuterDays } from '../demos/datepicker/calendar/month-change-direction-week-numbers-outer-days/month-change-direction-week-numbers-outer-days';
import { AppComponent as CalendarMultipleMonths } from '../demos/datepicker/calendar/multiple-months/multiple-months';
import { AppComponent as CalendarMultipleSelect } from '../demos/datepicker/calendar/multiple-select/multiple-select';
import { AppComponent as CalendarQuarterYearView } from '../demos/datepicker/calendar/quarter-year-view/quarter-year-view';
import { AppComponent as CalendarRangeSelect } from '../demos/datepicker/calendar/range-select/range-select';
import { AppComponent as CalendarRecurringValues } from '../demos/datepicker/calendar/recurring-values/recurring-values';
import { AppComponent as CalendarResponsive } from '../demos/datepicker/calendar/responsive/responsive';
import { AppComponent as CalendarRtlRightToLeft } from '../demos/datepicker/calendar/rtl-right-to-left/rtl-right-to-left';
import { AppComponent as CalendarSettingThePickerTimezone } from '../demos/datepicker/calendar/setting-the-picker-timezone/setting-the-picker-timezone';
import { AppComponent as CalendarSettingValuesDefaults } from '../demos/datepicker/calendar/setting-values-defaults/setting-values-defaults';
import { AppComponent as CalendarSingleSelect } from '../demos/datepicker/calendar/single-select/single-select';
import { AppComponent as CalendarThemesIosMaterialWindows } from '../demos/datepicker/calendar/themes-ios-material-windows/themes-ios-material-windows';
import { AppComponent as CalendarUsageOnInputOrInline } from '../demos/datepicker/calendar/usage-on-input-or-inline/usage-on-input-or-inline';
import { AppComponent as CalendarWeekSelect } from '../demos/datepicker/calendar/week-select/week-select';
import { AppComponent as CalendarWeekToMonth } from '../demos/datepicker/calendar/week-to-month/week-to-month';
import { AppComponent as CalendarWeekView } from '../demos/datepicker/calendar/week-view/week-view';
import { AppComponent as DatetimeDateObjectISO8601Moment } from '../demos/datepicker/datetime/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import { AppComponent as DatetimeDatePicker } from '../demos/datepicker/datetime/date-picker/date-picker';
import { AppComponent as DatetimeDateTimePicker } from '../demos/datepicker/datetime/date-time-picker/date-time-picker';
import { AppComponent as DatetimeDisabledInvalidValues } from '../demos/datepicker/datetime/disabled-invalid-values/disabled-invalid-values';
import { AppComponent as DatetimeEventHooks } from '../demos/datepicker/datetime/event-hooks/event-hooks';
import { AppComponent as DatetimeFormattingReturnValues } from '../demos/datepicker/datetime/formatting-return-values/formatting-return-values';
import { AppComponent as DatetimeGregorianJalaliHijri } from '../demos/datepicker/datetime/gregorian-jalali-hijri/gregorian-jalali-hijri';
import { AppComponent as DatetimeLocalization } from '../demos/datepicker/datetime/localization/localization';
import { AppComponent as DatetimeMinMaxRestrictions } from '../demos/datepicker/datetime/min-max-restrictions/min-max-restrictions';
import { AppComponent as DatetimeMobileDesktopDisplay } from '../demos/datepicker/datetime/mobile-desktop-display/mobile-desktop-display';
import { AppComponent as DatetimeMobileDesktopUsage } from '../demos/datepicker/datetime/mobile-desktop-usage/mobile-desktop-usage';
import { AppComponent as DatetimeMonthYearPicker } from '../demos/datepicker/datetime/month-year-picker/month-year-picker';
import { AppComponent as DatetimeRangeSelect } from '../demos/datepicker/datetime/range-select/range-select';
import { AppComponent as DatetimeRecurringValues } from '../demos/datepicker/datetime/recurring-values/recurring-values';
import { AppComponent as DatetimeResponsive } from '../demos/datepicker/datetime/responsive/responsive';
import { AppComponent as DatetimeRtlRightToLeft } from '../demos/datepicker/datetime/rtl-right-to-left/rtl-right-to-left';
import { AppComponent as DatetimeSettingThePickerTimezone } from '../demos/datepicker/datetime/setting-the-picker-timezone/setting-the-picker-timezone';
import { AppComponent as DatetimeSettingValuesDefaults } from '../demos/datepicker/datetime/setting-values-defaults/setting-values-defaults';
import { AppComponent as DatetimeSingleSelect } from '../demos/datepicker/datetime/single-select/single-select';
import { AppComponent as DatetimeThemesIosMaterialWindows } from '../demos/datepicker/datetime/themes-ios-material-windows/themes-ios-material-windows';
import { AppComponent as DatetimeTimePicker } from '../demos/datepicker/datetime/time-picker/time-picker';
import { AppComponent as DatetimeTimeValueSteps } from '../demos/datepicker/datetime/time-value-steps/time-value-steps';
import { AppComponent as DatetimeUsageOnInputOrInline } from '../demos/datepicker/datetime/usage-on-input-or-inline/usage-on-input-or-inline';
import { AppComponent as AgendaBasicUsage } from '../demos/eventcalendar/agenda/basic-usage/basic-usage';
import { AppComponent as AgendaCustomEventSort } from '../demos/eventcalendar/agenda/custom-event-sort/custom-event-sort';
import { AppComponent as AgendaCustomEventTooltip } from '../demos/eventcalendar/agenda/custom-event-tooltip/custom-event-tooltip';
import { AppComponent as AgendaCustomizingHeader } from '../demos/eventcalendar/agenda/customizing-header/customizing-header';
import { AppComponent as AgendaDailyAgendaWithWeekCalendar } from '../demos/eventcalendar/agenda/daily-agenda-with-week-calendar/daily-agenda-with-week-calendar';
import { AppComponent as AgendaDailyWeeklyMonthlyAnnualAgenda } from '../demos/eventcalendar/agenda/daily-weekly-monthly-annual-agenda/daily-weekly-monthly-annual-agenda';
import { AppComponent as AgendaDateObjectISO8601Moment } from '../demos/eventcalendar/agenda/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import { AppComponent as AgendaEmptyState } from '../demos/eventcalendar/agenda/empty-state/empty-state';
import { AppComponent as AgendaEventBulkActionsEditDeleteUpdate } from '../demos/eventcalendar/agenda/event-bulk-actions-edit-delete-update/event-bulk-actions-edit-delete-update';
import { AppComponent as AgendaEventContentCustomization } from '../demos/eventcalendar/agenda/event-content-customization/event-content-customization';
import { AppComponent as AgendaEventDataStructure } from '../demos/eventcalendar/agenda/event-data-structure/event-data-structure';
import { AppComponent as AgendaEventHooks } from '../demos/eventcalendar/agenda/event-hooks/event-hooks';
import { AppComponent as AgendaFullEventCustomization } from '../demos/eventcalendar/agenda/full-event-customization/full-event-customization';
import { AppComponent as AgendaGregorianJalaliHijri } from '../demos/eventcalendar/agenda/gregorian-jalali-hijri/gregorian-jalali-hijri';
import { AppComponent as AgendaLoadEventsFromGoogleCalendar } from '../demos/eventcalendar/agenda/load-events-from-google-calendar/load-events-from-google-calendar';
import { AppComponent as AgendaLoadEventsFromRemoteApi } from '../demos/eventcalendar/agenda/load-events-from-remote-api/load-events-from-remote-api';
import { AppComponent as AgendaLoadEventsOnDemand } from '../demos/eventcalendar/agenda/load-events-on-demand/load-events-on-demand';
import { AppComponent as AgendaLoadInlineData } from '../demos/eventcalendar/agenda/load-inline-data/load-inline-data';
import { AppComponent as AgendaLocalization } from '../demos/eventcalendar/agenda/localization/localization';
import { AppComponent as AgendaPrintingTheView } from '../demos/eventcalendar/agenda/printing-the-view/printing-the-view';
import { AppComponent as AgendaRecurringEvents } from '../demos/eventcalendar/agenda/recurring-events/recurring-events';
import { AppComponent as AgendaResourceFilteringInHeader } from '../demos/eventcalendar/agenda/resource-filtering-in-header/resource-filtering-in-header';
import { AppComponent as AgendaSearchingEventsInPopup } from '../demos/eventcalendar/agenda/searching-events-in-popup/searching-events-in-popup';
import { AppComponent as AgendaSettingTheTimezone } from '../demos/eventcalendar/agenda/setting-the-timezone/setting-the-timezone';
import { AppComponent as AgendaSyncEventsGoogleCalendar } from '../demos/eventcalendar/agenda/sync-events-google-calendar/sync-events-google-calendar';
import { AppComponent as AgendaSyncEventsOutlookCalendar } from '../demos/eventcalendar/agenda/sync-events-outlook-calendar/sync-events-outlook-calendar';
import { AppComponent as AgendaSynchronizedViews } from '../demos/eventcalendar/agenda/synchronized-views/synchronized-views';
import { AppComponent as AgendaThemesIosMaterialWindows } from '../demos/eventcalendar/agenda/themes-ios-material-windows/themes-ios-material-windows';
import { AppComponent as EventcalendarBlockedDaysRanges } from '../demos/eventcalendar/calendar-view/blocked-days-ranges/blocked-days-ranges';
import { AppComponent as EventcalendarColoredCellBackground } from '../demos/eventcalendar/calendar-view/colored-cell-background/colored-cell-background';
import { AppComponent as EventcalendarConditionalMoveResize } from '../demos/eventcalendar/calendar-view/conditional-move-resize/conditional-move-resize-drag-drop-fixed-event-length-fixed-to-resource';
import { AppComponent as EventcalendarCreateReadUpdateDeleteCRUD } from '../demos/eventcalendar/calendar-view/create-read-update-delete-CRUD/create-read-update-delete-CRUD';
import { AppComponent as EventcalendarCustomEventSort } from '../demos/eventcalendar/calendar-view/custom-event-sort/custom-event-sort';
import { AppComponent as EventcalendarCustomEventTooltip } from '../demos/eventcalendar/calendar-view/custom-event-tooltip/custom-event-tooltip';
import { AppComponent as EventcalendarCustomizeEventPopover } from '../demos/eventcalendar/calendar-view/customize-event-popover/customize-event-popover';
import { AppComponent as EventcalendarCustomizeLabelLookAndFeel } from '../demos/eventcalendar/calendar-view/customize-label-look-and-feel/customize-label-look-and-feel';
import { AppComponent as EventcalendarCustomizingHeader } from '../demos/eventcalendar/calendar-view/customizing-header/customizing-header';
import { AppComponent as EventcalendarCutCopyPasteEventsBetweenCalendars } from '../demos/eventcalendar/calendar-view/cut-copy-paste-events-between-calendars/cut-copy-paste-events-between-calendars';
import { AppComponent as EventcalendarDateObjectISO8601Moment } from '../demos/eventcalendar/calendar-view/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import { AppComponent as EventcalendarDesktopMonthView } from '../demos/eventcalendar/calendar-view/desktop-month-view/desktop-month-view';
import { AppComponent as EventcalendarDisallowPastEventCreation } from '../demos/eventcalendar/calendar-view/disallow-past-event-creation/disallow-past-event-creation';
import { AppComponent as EventcalendarDragDropBetweenCalendarInstances } from '../demos/eventcalendar/calendar-view/drag-drop-between-calendar-instances/drag-drop-between-calendar-instances';
import { AppComponent as EventcalendarEventBulkActionsEditDeleteUpdate } from '../demos/eventcalendar/calendar-view/event-bulk-actions-edit-delete-update/event-bulk-actions-edit-delete-update';
import { AppComponent as EventcalendarEventDataStructure } from '../demos/eventcalendar/calendar-view/event-data-structure/event-data-structure';
import { AppComponent as EventcalendarEventHooks } from '../demos/eventcalendar/calendar-view/event-hooks/event-hooks';
import { AppComponent as EventcalendarEventLabels } from '../demos/eventcalendar/calendar-view/event-labels/event-labels';
import { AppComponent as EventcalendarEventPopover } from '../demos/eventcalendar/calendar-view/event-popover/event-popover';
import { AppComponent as EventcalendarExternalDragDropScheduleUnschedule } from '../demos/eventcalendar/calendar-view/external-drag-drop-schedule-unschedule/external-drag-drop-schedule-unschedule';
import { AppComponent as EventcalendarExternalEventPresets } from '../demos/eventcalendar/calendar-view/external-event-presets/external-event-presets';
import { AppComponent as EventcalendarGregorianJalaliHijri } from '../demos/eventcalendar/calendar-view/gregorian-jalali-hijri/gregorian-jalali-hijri';
import { AppComponent as EventcalendarLoadEventsFromGoogleCalendar } from '../demos/eventcalendar/calendar-view/load-events-from-google-calendar/load-events-from-google-calendar';
import { AppComponent as EventcalendarLoadEventsFromRemoteApi } from '../demos/eventcalendar/calendar-view/load-events-from-remote-api/load-events-from-remote-api';
import { AppComponent as EventcalendarLoadEventsOnDemand } from '../demos/eventcalendar/calendar-view/load-events-on-demand/load-events-on-demand';
import { AppComponent as EventcalendarLoadInlineData } from '../demos/eventcalendar/calendar-view/load-inline-data/load-inline-data';
import { AppComponent as EventcalendarLocalization } from '../demos/eventcalendar/calendar-view/localization/localization';
import { AppComponent as EventcalendarMobileMonthView } from '../demos/eventcalendar/calendar-view/mobile-month-view/mobile-month-view';
import { AppComponent as EventcalendarMonthWeekView } from '../demos/eventcalendar/calendar-view/month-week-view/month-week-view';
import { AppComponent as EventcalendarMoveResizeDragDropToCreateEvents } from '../demos/eventcalendar/calendar-view/move-resize-drag-drop-to-create-events/move-resize-drag-drop-to-create-events';
import { AppComponent as EventcalendarMultipleTimezoneSupport } from '../demos/eventcalendar/calendar-view/multiple-timezone-support/multiple-timezone-support';
import { AppComponent as EventcalendarPreventDoubleBookingEvents } from '../demos/eventcalendar/calendar-view/prevent-double-booking-events/prevent-double-booking-events';
import { AppComponent as EventcalendarPrintingTheView } from '../demos/eventcalendar/calendar-view/printing-the-view/printing-the-view';
import { AppComponent as EventcalendarQuarterYearView } from '../demos/eventcalendar/calendar-view/quarter-year-view/quarter-year-view';
import { AppComponent as EventcalendarRecurringEventAddEditDialog } from '../demos/eventcalendar/calendar-view/recurring-event-add-edit-dialog/recurring-event-add-edit-dialog';
import { AppComponent as EventcalendarRecurringEvents } from '../demos/eventcalendar/calendar-view/recurring-events/recurring-events';
import { AppComponent as EventcalendarResourceFilteringInHeader } from '../demos/eventcalendar/calendar-view/resource-filtering-in-header/resource-filtering-in-header';
import { AppComponent as EventcalendarResponsiveMonthView } from '../demos/eventcalendar/calendar-view/responsive-month-view/responsive-month-view';
import { AppComponent as EventcalendarSearchingEventsInPopup } from '../demos/eventcalendar/calendar-view/searching-events-in-popup/searching-events-in-popup';
import { AppComponent as EventcalendarSearchingEventsInSidebar } from '../demos/eventcalendar/calendar-view/searching-events-in-sidebar/searching-events-in-sidebar';
import { AppComponent as EventcalendarSettingTheTimezone } from '../demos/eventcalendar/calendar-view/setting-the-timezone/setting-the-timezone';
import { AppComponent as EventcalendarShowMoreAllLabels } from '../demos/eventcalendar/calendar-view/show-more-all-labels/show-more-all-labels';
import { AppComponent as EventcalendarSwitchingDayWeekMonthView } from '../demos/eventcalendar/calendar-view/switching-day-week-month-view/switching-day-week-month-view';
import { AppComponent as EventcalendarSyncEventsGoogleCalendar } from '../demos/eventcalendar/calendar-view/sync-events-google-calendar/sync-events-google-calendar';
import { AppComponent as EventcalendarSyncEventsOutlookCalendar } from '../demos/eventcalendar/calendar-view/sync-events-outlook-calendar/sync-events-outlook-calendar';
import { AppComponent as EventcalendarThemesIosMaterialWindows } from '../demos/eventcalendar/calendar-view/themes-ios-material-windows/themes-ios-material-windows';
import { AppComponent as SchedulerColoredCellBackground } from '../demos/eventcalendar/scheduler/colored-cell-background/colored-cell-background';
import { AppComponent as SchedulerColorsInvalidsCssClass } from '../demos/eventcalendar/scheduler/colors-invalids-css-class/colors-invalids-css-class';
import { AppComponent as SchedulerConditionalMoveResize } from '../demos/eventcalendar/scheduler/conditional-move-resize/conditional-move-resize-drag-drop-fixed-event-length-fixed-to-resource';
import { AppComponent as SchedulerControlNumberOfConcurrentlyShownEvents } from '../demos/eventcalendar/scheduler/control-number-of-concurrently-shown-events/control-number-of-concurrently-shown-events';
import { AppComponent as SchedulerCreateReadUpdateDeleteCRUD } from '../demos/eventcalendar/scheduler/create-read-update-delete-CRUD/create-read-update-delete-CRUD';
import { AppComponent as SchedulerCustomEventTooltip } from '../demos/eventcalendar/scheduler/custom-event-tooltip/custom-event-tooltip';
import { AppComponent as SchedulerCustomRangeView } from '../demos/eventcalendar/scheduler/custom-range-view/custom-range-view';
import { AppComponent as SchedulerCustomResourceHeaderTemplate } from '../demos/eventcalendar/scheduler/custom-resource-header-template/custom-resource-header-template';
import { AppComponent as SchedulerCustomizingEvents } from '../demos/eventcalendar/scheduler/customizing-events/customizing-events';
import { AppComponent as SchedulerCustomizingHeader } from '../demos/eventcalendar/scheduler/customizing-header/customizing-header';
import { AppComponent as SchedulerDateHeaderTemplate } from '../demos/eventcalendar/scheduler/date-header-template/date-header-template';
import { AppComponent as SchedulerDateObjectISO8601Moment } from '../demos/eventcalendar/scheduler/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import { AppComponent as SchedulerDesktopDayView } from '../demos/eventcalendar/scheduler/desktop-day-view/desktop-day-view';
import { AppComponent as SchedulerDesktopWeekView } from '../demos/eventcalendar/scheduler/desktop-week-view/desktop-week-view';
import { AppComponent as SchedulerDisableAllDayEvents } from '../demos/eventcalendar/scheduler/disable-all-day-events/disable-all-day-events';
import { AppComponent as SchedulerDisallowPastEventCreation } from '../demos/eventcalendar/scheduler/disallow-past-event-creation/disallow-past-event-creation';
import { AppComponent as SchedulerDisplayMultipleDaysWeeks } from '../demos/eventcalendar/scheduler/display-multiple-days-weeks/display-multiple-days-weeks';
import { AppComponent as SchedulerDoctorsAppointment } from '../demos/eventcalendar/scheduler/doctors-appointment/doctors-appointment';
import { AppComponent as SchedulerDragDropBetweenCalendarInstances } from '../demos/eventcalendar/scheduler/drag-drop-between-calendar-instances/drag-drop-between-calendar-instances';
import { AppComponent as SchedulerDynamicAddRemoveResourcesFilter } from '../demos/eventcalendar/scheduler/dynamic-add-remove-resources-filter/dynamic-add-remove-resources-filter';
import { AppComponent as SchedulerEventBulkActionsEditDeleteUpdate } from '../demos/eventcalendar/scheduler/event-bulk-actions-edit-delete-update/event-bulk-actions-edit-delete-update';
import { AppComponent as SchedulerEventDataStructure } from '../demos/eventcalendar/scheduler/event-data-structure/event-data-structure';
import { AppComponent as SchedulerEventHooks } from '../demos/eventcalendar/scheduler/event-hooks/event-hooks';
import { AppComponent as SchedulerExternalDragDropScheduleUnschedule } from '../demos/eventcalendar/scheduler/external-drag-drop-schedule-unschedule/external-drag-drop-schedule-unschedule';
import { AppComponent as SchedulerExternalEventPresets } from '../demos/eventcalendar/scheduler/external-event-presets/external-event-presets';
import { AppComponent as SchedulerGregorianJalaliHijri } from '../demos/eventcalendar/scheduler/gregorian-jalali-hijri/gregorian-jalali-hijri';
import { AppComponent as SchedulerGroupByResourceByDay } from '../demos/eventcalendar/scheduler/group-by-resource-by-day/group-by-resource-by-day';
import { AppComponent as SchedulerLoadEventsFromGoogleCalendar } from '../demos/eventcalendar/scheduler/load-events-from-google-calendar/load-events-from-google-calendar';
import { AppComponent as SchedulerLoadEventsFromRemoteApi } from '../demos/eventcalendar/scheduler/load-events-from-remote-api/load-events-from-remote-api';
import { AppComponent as SchedulerLoadEventsOnDemand } from '../demos/eventcalendar/scheduler/load-events-on-demand/load-events-on-demand';
import { AppComponent as SchedulerLoadInlineData } from '../demos/eventcalendar/scheduler/load-inline-data/load-inline-data';
import { AppComponent as SchedulerLocalization } from '../demos/eventcalendar/scheduler/localization/localization';
import { AppComponent as SchedulerMobileDayView } from '../demos/eventcalendar/scheduler/mobile-day-view/mobile-day-view';
import { AppComponent as SchedulerMobileWeekView } from '../demos/eventcalendar/scheduler/mobile-week-view/mobile-week-view';
import { AppComponent as SchedulerMoveResizeDragDropToCreateEvents } from '../demos/eventcalendar/scheduler/move-resize-drag-drop-to-create-events/move-resize-drag-drop-to-create-events';
import { AppComponent as SchedulerMultipleTimezoneSupport } from '../demos/eventcalendar/scheduler/multiple-timezone-support/multiple-timezone-support';
import { AppComponent as SchedulerPreventDoubleBookingEvents } from '../demos/eventcalendar/scheduler/prevent-double-booking-events/prevent-double-booking-events';
import { AppComponent as SchedulerPrintingTheView } from '../demos/eventcalendar/scheduler/printing-the-view/printing-the-view';
import { AppComponent as SchedulerRecurringEventAddEditDialog } from '../demos/eventcalendar/scheduler/recurring-event-add-edit-dialog/recurring-event-add-edit-dialog';
import { AppComponent as SchedulerRecurringEvents } from '../demos/eventcalendar/scheduler/recurring-events/recurring-events';
import { AppComponent as SchedulerResourceDataStructure } from '../demos/eventcalendar/scheduler/resource-data-structure/resource-data-structure';
import { AppComponent as SchedulerResourceFilteringInHeader } from '../demos/eventcalendar/scheduler/resource-filtering-in-header/resource-filtering-in-header';
import { AppComponent as SchedulerResourceView } from '../demos/eventcalendar/scheduler/resource-view/resource-view';
import { AppComponent as SchedulerResponsiveDayWeekSchedule } from '../demos/eventcalendar/scheduler/responsive-day-week-schedule/responsive-day-week-schedule';
import { AppComponent as SchedulerSearchingEventsInSidebar } from '../demos/eventcalendar/scheduler/searching-events-in-sidebar/searching-events-in-sidebar';
import { AppComponent as SchedulerSettingTheTimezone } from '../demos/eventcalendar/scheduler/setting-the-timezone/setting-the-timezone';
import { AppComponent as SchedulerSharedEventsAcrossResources } from '../demos/eventcalendar/scheduler/shared-events-across-resources/shared-events-across-resources';
import { AppComponent as SchedulerShowHideHoursDays } from '../demos/eventcalendar/scheduler/show-hide-hours-days/show-hide-hours-days';
import { AppComponent as SchedulerShowMultipleTimezones } from '../demos/eventcalendar/scheduler/show-multiple-timezones/show-multiple-timezones';
import { AppComponent as SchedulerSwitchingCalendarSchedulerAgenda } from '../demos/eventcalendar/scheduler/switching-calendar-scheduler-agenda/switching-calendar-scheduler-agenda';
import { AppComponent as SchedulerSyncEventsGoogleCalendar } from '../demos/eventcalendar/scheduler/sync-events-google-calendar/sync-events-google-calendar';
import { AppComponent as SchedulerSyncEventsOutlookCalendar } from '../demos/eventcalendar/scheduler/sync-events-outlook-calendar/sync-events-outlook-calendar';
import { AppComponent as SchedulerThemesIosMaterialWindows } from '../demos/eventcalendar/scheduler/themes-ios-material-windows/themes-ios-material-windows';
import { AppComponent as SchedulerTimeOffBlockedRanges } from '../demos/eventcalendar/scheduler/time-off-blocked-ranges/time-off-blocked-ranges';
import { AppComponent as SchedulerWorkWeekHours } from '../demos/eventcalendar/scheduler/work-week-hours/work-week-hours';
import { AppComponent as TimelineAssignUnassignWorkOrdersFixedTopRow } from '../demos/eventcalendar/timeline/assign-unassign-work-orders-fixed-top-row/assign-unassign-work-orders-fixed-top-row';
import { AppComponent as TimelineColorsInvalidsCssClass } from '../demos/eventcalendar/timeline/colors-invalids-css-class/colors-invalids-css-class';
import { AppComponent as TimelineCompareResourcesFixedAtTop } from '../demos/eventcalendar/timeline/compare-resources-fixed-at-top/compare-resources-fixed-at-top';
import { AppComponent as TimelineConditionalMoveResize } from '../demos/eventcalendar/timeline/conditional-move-resize/conditional-move-resize-drag-drop-fixed-event-length-fixed-to-resource';
import { AppComponent as TimelineConnectingLinkingEventsArrows } from '../demos/eventcalendar/timeline/connecting-linking-events-arrows/connecting-linking-events-arrows';
import { AppComponent as TimelineControlNumberOfConcurrentlyShownEvents } from '../demos/eventcalendar/timeline/control-number-of-concurrently-shown-events/control-number-of-concurrently-shown-events';
import { AppComponent as TimelineCreateReadUpdateDeleteCRUD } from '../demos/eventcalendar/timeline/create-read-update-delete-CRUD/create-read-update-delete-CRUD';
import { AppComponent as TimelineCustomEventTooltip } from '../demos/eventcalendar/timeline/custom-event-tooltip/custom-event-tooltip';
import { AppComponent as TimelineCustomRangeView } from '../demos/eventcalendar/timeline/custom-range-view/custom-range-view';
import { AppComponent as TimelineDailyWeeklyMonthlyYearlyTimeline } from '../demos/eventcalendar/timeline/daily-weekly-monthly-yearly-timeline/daily-weekly-monthly-yearly-timeline';
import { AppComponent as TimelineDateObjectISO8601Moment } from '../demos/eventcalendar/timeline/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import { AppComponent as TimelineDisallowPastEventCreation } from '../demos/eventcalendar/timeline/disallow-past-event-creation/disallow-past-event-creation';
import { AppComponent as TimelineDragDropBetweenCalendarInstances } from '../demos/eventcalendar/timeline/drag-drop-between-calendar-instances/drag-drop-between-calendar-instances';
import { AppComponent as TimelineDynamicallyColorAndInvalidate } from '../demos/eventcalendar/timeline/dynamically-color-and-invalidate/dynamically-color-and-invalidate';
import { AppComponent as TimelineEmployeeShifts } from '../demos/eventcalendar/timeline/employee-shifts/employee-shifts';
import { AppComponent as TimelineEventBulkActionsEditDeleteUpdate } from '../demos/eventcalendar/timeline/event-bulk-actions-edit-delete-update/event-bulk-actions-edit-delete-update';
import { AppComponent as TimelineEventDataStructure } from '../demos/eventcalendar/timeline/event-data-structure/event-data-structure';
import { AppComponent as TimelineEventHooks } from '../demos/eventcalendar/timeline/event-hooks/event-hooks';
import { AppComponent as TimelineEventListing } from '../demos/eventcalendar/timeline/event-listing/event-listing';
import { AppComponent as TimelineFlightSchedulingTwoSynchronizedTimelines } from '../demos/eventcalendar/timeline/flight-scheduling-two-synchronized-timelines/flight-scheduling-two-synchronized-timelines';
import { AppComponent as TimelineGregorianJalaliHijri } from '../demos/eventcalendar/timeline/gregorian-jalali-hijri/gregorian-jalali-hijri';
import { AppComponent as TimelineHourDayWeekMonthQuarterYearHeaderFooterTemplate } from '../demos/eventcalendar/timeline/hour-day-week-month-quarter-year-header-footer-template/hour-day-week-month-quarter-year-header-footer-template';
import { AppComponent as TimelineLoadEventsFromGoogleCalendar } from '../demos/eventcalendar/timeline/load-events-from-google-calendar/load-events-from-google-calendar';
import { AppComponent as TimelineLoadEventsFromRemoteApi } from '../demos/eventcalendar/timeline/load-events-from-remote-api/load-events-from-remote-api';
import { AppComponent as TimelineLoadEventsOnDemand } from '../demos/eventcalendar/timeline/load-events-on-demand/load-events-on-demand';
import { AppComponent as TimelineLoadInlineData } from '../demos/eventcalendar/timeline/load-inline-data/load-inline-data';
import { AppComponent as TimelineLoadResourcesOnDemand } from '../demos/eventcalendar/timeline/load-resources-on-demand/load-resources-on-demand';
import { AppComponent as TimelineLoadingBigDataSets } from '../demos/eventcalendar/timeline/loading-big-data-sets/loading-big-data-sets';
import { AppComponent as TimelineLocalization } from '../demos/eventcalendar/timeline/localization/localization';
import { AppComponent as TimelineMealPlanner } from '../demos/eventcalendar/timeline/meal-planner/meal-planner';
import { AppComponent as TimelineMonthView } from '../demos/eventcalendar/timeline/month-view/month-view';
import { AppComponent as TimelineMonthlyTimetableVerticalDaysHorizontalTimes } from '../demos/eventcalendar/timeline/monthly-timetable-vertical-days-horizontal-times/monthly-timetable-vertical-days-horizontal-times';
import { AppComponent as TimelineMoveResizeDragDropToCreateEvents } from '../demos/eventcalendar/timeline/move-resize-drag-drop-to-create-events/move-resize-drag-drop-to-create-events';
import { AppComponent as TimelineMultiClassroomTimetable } from '../demos/eventcalendar/timeline/multi-classroom-timetable/multi-classroom-timetable';
import { AppComponent as TimelineMultipleDaysWeeksMonthsQuartersYearsVariableResolution } from '../demos/eventcalendar/timeline/multiple-days-weeks-months-quarters-years-variable-resolution/multiple-days-weeks-months-quarters-years-variable-resolution';
import { AppComponent as TimelineMultipleTimezoneSupport } from '../demos/eventcalendar/timeline/multiple-timezone-support/multiple-timezone-support';
import { AppComponent as TimelinePreventDoubleBookingEvents } from '../demos/eventcalendar/timeline/prevent-double-booking-events/prevent-double-booking-events';
import { AppComponent as TimelinePrintingTheView } from '../demos/eventcalendar/timeline/printing-the-view/printing-the-view';
import { AppComponent as TimelineRecurringEvents } from '../demos/eventcalendar/timeline/recurring-events/recurring-events';
import { AppComponent as TimelineResourceDataStructure } from '../demos/eventcalendar/timeline/resource-data-structure/resource-data-structure';
import { AppComponent as TimelineResourceGroupingHierarchy } from '../demos/eventcalendar/timeline/resource-grouping-hierarchy/resource-grouping-hierarchy';
import { AppComponent as TimelineResourceHeaderTemplate } from '../demos/eventcalendar/timeline/resource-header-template/resource-header-template';
import { AppComponent as TimelineRestaurantShiftManagement } from '../demos/eventcalendar/timeline/restaurant-shift-management/restaurant-shift-management';
import { AppComponent as TimelineRtlRightToLeft } from '../demos/eventcalendar/timeline/rtl-right-to-left/rtl-right-to-left';
import { AppComponent as TimelineSearchingEventsInSidebar } from '../demos/eventcalendar/timeline/searching-events-in-sidebar/searching-events-in-sidebar';
import { AppComponent as TimelineSettingRowHeight } from '../demos/eventcalendar/timeline/setting-row-height/setting-row-height';
import { AppComponent as TimelineSettingTheTimezone } from '../demos/eventcalendar/timeline/setting-the-timezone/setting-the-timezone';
import { AppComponent as TimelineShiftTemplate } from '../demos/eventcalendar/timeline/shift-template/shift-template';
import { AppComponent as TimelineSwitchingDayWeekWorkWeekTimeline } from '../demos/eventcalendar/timeline/switching-day-week-work-week-timeline/switching-day-week-work-week-timeline';
import { AppComponent as TimelineSyncEventsGoogleCalendar } from '../demos/eventcalendar/timeline/sync-events-google-calendar/sync-events-google-calendar';
import { AppComponent as TimelineSyncEventsOutlookCalendar } from '../demos/eventcalendar/timeline/sync-events-outlook-calendar/sync-events-outlook-calendar';
import { AppComponent as TimelineThemesIosMaterialWindows } from '../demos/eventcalendar/timeline/themes-ios-material-windows/themes-ios-material-windows';
import { AppComponent as TimelineTimelineCustomEventRendering } from '../demos/eventcalendar/timeline/timeline-custom-event-rendering/timeline-custom-event-rendering';
import { AppComponent as TimelineTimelineResourceDetailsSidePanelFooter } from '../demos/eventcalendar/timeline/timeline-resource-details-side-panel-footer/timeline-resource-details-side-panel-footer';
import { AppComponent as TimelineTimelineResourceHeight } from '../demos/eventcalendar/timeline/timeline-resource-height/timeline-resource-height';
import { AppComponent as TimelineTimelineTimeGrid } from '../demos/eventcalendar/timeline/timeline-time-grid/timeline-time-grid';
import { AppComponent as TimelineTimezoneMeetingPlanner } from '../demos/eventcalendar/timeline/timezone-meeting-planner/timezone-meeting-planner';
import { AppComponent as TimelineWorkOrderScheduling } from '../demos/eventcalendar/timeline/work-order-scheduling/work-order-scheduling';
import { AppComponent as FormsAlertConfirmPrompt } from '../demos/form-components/forms/alert-confirm-prompt/alert-confirm-prompt';
import { AppComponent as FormsButtonSegmentedStepperColors } from '../demos/form-components/forms/button-segmented-stepper-colors/button-segmented-stepper-colors';
import { AppComponent as FormsButtons } from '../demos/form-components/forms/buttons/buttons';
import { AppComponent as FormsCheckbox } from '../demos/form-components/forms/checkbox/checkbox';
import { AppComponent as FormsDesktop } from '../demos/form-components/forms/desktop/desktop';
import { AppComponent as FormsInputLabelTypes } from '../demos/form-components/forms/input-label-types/input-label-types';
import { AppComponent as FormsInputsTextAreasDateFields } from '../demos/form-components/forms/inputs-text-areas-date-fields/inputs-text-areas-date-fields';
import { AppComponent as FormsMobile } from '../demos/form-components/forms/mobile/mobile';
import { AppComponent as FormsNotifications } from '../demos/form-components/forms/notifications/notifications';
import { AppComponent as FormsPopup } from '../demos/form-components/forms/popup/popup';
import { AppComponent as FormsRadioButton } from '../demos/form-components/forms/radio-button/radio-button';
import { AppComponent as FormsResponsive } from '../demos/form-components/forms/responsive/responsive';
import { AppComponent as FormsSegmented } from '../demos/form-components/forms/segmented/segmented';
import { AppComponent as FormsStepper } from '../demos/form-components/forms/stepper/stepper';
import { AppComponent as FormsSwitch } from '../demos/form-components/forms/switch/switch';
import { AppComponent as FormsThemesIosMaterialWindows } from '../demos/form-components/forms/themes-ios-material-windows/themes-ios-material-windows';
import { AppComponent as RangeAddingEventStartEnd } from '../demos/datepicker/range/adding-event-start-end/adding-event-start-end';
import { AppComponent as RangeBookRentalMonthsAhead } from '../demos/datepicker/range/book-rental-months-ahead/book-rental-months-ahead';
import { AppComponent as RangeCalendarScrollerDropdown } from '../demos/datepicker/range/calendar-scroller-dropdown/calendar-scroller-dropdown';
import { AppComponent as RangeCustomizeMarkedDayShapes } from '../demos/datepicker/range/customize-marked-day-shapes/customize-marked-day-shapes';
import { AppComponent as RangeCustomizingLabelsSelection } from '../demos/datepicker/range/customizing-labels-selection/customizing-labels-selection';
import { AppComponent as RangeDateFilteringWithPredefinedRanges } from '../demos/datepicker/range/date-filtering-with-predefined-ranges/date-filtering-with-predefined-ranges';
import { AppComponent as RangeDateObjectISO8601Moment } from '../demos/datepicker/range/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import { AppComponent as RangeDateRange } from '../demos/datepicker/range/date-range/date-range';
import { AppComponent as RangeDateTimeRange } from '../demos/datepicker/range/date-time-range/date-time-range';
import { AppComponent as RangeDisabledInvalidValues } from '../demos/datepicker/range/disabled-invalid-values/disabled-invalid-values';
import { AppComponent as RangeDotsColorsLabels } from '../demos/datepicker/range/dots-colors-labels/dots-colors-labels';
import { AppComponent as RangeEventHooks } from '../demos/datepicker/range/event-hooks/event-hooks';
import { AppComponent as RangeFlightBooking } from '../demos/datepicker/range/flight-booking/flight-booking';
import { AppComponent as RangeFormattingReturnValues } from '../demos/datepicker/range/formatting-return-values/formatting-return-values';
import { AppComponent as RangeGregorianJalaliHijri } from '../demos/datepicker/range/gregorian-jalali-hijri/gregorian-jalali-hijri';
import { AppComponent as RangeHalfDayStyling } from '../demos/datepicker/range/half-day-styling/half-day-styling';
import { AppComponent as RangeLocalization } from '../demos/datepicker/range/localization/localization';
import { AppComponent as RangeMinMaxLength } from '../demos/datepicker/range/min-max-length/min-max-length';
import { AppComponent as RangeMinMaxRestrictions } from '../demos/datepicker/range/min-max-restrictions/min-max-restrictions';
import { AppComponent as RangeMobileDesktopDisplay } from '../demos/datepicker/range/mobile-desktop-display/mobile-desktop-display';
import { AppComponent as RangeMobileDesktopUsage } from '../demos/datepicker/range/mobile-desktop-usage/mobile-desktop-usage';
import { AppComponent as RangePresets } from '../demos/datepicker/range/presets/presets';
import { AppComponent as RangeRecurringValues } from '../demos/datepicker/range/recurring-values/recurring-values';
import { AppComponent as RangeResponsive } from '../demos/datepicker/range/responsive/responsive';
import { AppComponent as RangeRtlRightToLeft } from '../demos/datepicker/range/rtl-right-to-left/rtl-right-to-left';
import { AppComponent as RangeSettingThePickerTimezone } from '../demos/datepicker/range/setting-the-picker-timezone/setting-the-picker-timezone';
import { AppComponent as RangeThemesIosMaterialWindows } from '../demos/datepicker/range/themes-ios-material-windows/themes-ios-material-windows';
import { AppComponent as RangeTimeRange } from '../demos/datepicker/range/time-range/time-range';
import { AppComponent as RangeUsageOnInputOrInline } from '../demos/datepicker/range/usage-on-input-or-inline/usage-on-input-or-inline';
import { AppComponent as RangeWeekMonthViewScrollingDirection } from '../demos/datepicker/range/week-month-view-scrolling-direction/week-month-view-scrolling-direction';
import { AppComponent as SelectCountryPicker } from '../demos/pickers/select/country-picker/country-picker';
import { AppComponent as SelectDataSources } from '../demos/pickers/select/data-sources/data-sources';
import { AppComponent as SelectDisabledInvalidValues } from '../demos/pickers/select/disabled-invalid-values/disabled-invalid-values';
import { AppComponent as SelectEventHooks } from '../demos/pickers/select/event-hooks/event-hooks';
import { AppComponent as SelectFilteringValues } from '../demos/pickers/select/filtering-values/filtering-values';
import { AppComponent as SelectGroupOptions } from '../demos/pickers/select/group-options/group-options';
import { AppComponent as SelectImageText } from '../demos/pickers/select/image-text/image-text';
import { AppComponent as SelectItemTemplating } from '../demos/pickers/select/item-templating/item-templating';
import { AppComponent as SelectLinkedHierarchicalPickers } from '../demos/pickers/select/linked-hierarchical-pickers/linked-hierarchical-pickers';
import { AppComponent as SelectLocalization } from '../demos/pickers/select/localization/localization';
import { AppComponent as SelectMobileDesktopDisplay } from '../demos/pickers/select/mobile-desktop-display/mobile-desktop-display';
import { AppComponent as SelectMobileDesktopUsage } from '../demos/pickers/select/mobile-desktop-usage/mobile-desktop-usage';
import { AppComponent as SelectMultipleLines } from '../demos/pickers/select/multiple-lines/multiple-lines';
import { AppComponent as SelectMultipleSelect } from '../demos/pickers/select/multiple-select/multiple-select';
import { AppComponent as SelectResponsive } from '../demos/pickers/select/responsive/responsive';
import { AppComponent as SelectRtlRightToLeft } from '../demos/pickers/select/rtl-right-to-left/rtl-right-to-left';
import { AppComponent as SelectSettingValuesDefaults } from '../demos/pickers/select/setting-values-defaults/setting-values-defaults';
import { AppComponent as SelectSingleSelect } from '../demos/pickers/select/single-select/single-select';
import { AppComponent as SelectThemesIosMaterialWindows } from '../demos/pickers/select/themes-ios-material-windows/themes-ios-material-windows';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    DatetimeDatePicker,
    DatetimeDisabledInvalidValues,
    DatetimeTimePicker,
    DatetimeMonthYearPicker,
    DatetimeDateTimePicker,
    DatetimeEventHooks,
    DatetimeTimeValueSteps,
    DatetimeFormattingReturnValues,
    DatetimeSettingValuesDefaults,
    DatetimeDateObjectISO8601Moment,
    DatetimeThemesIosMaterialWindows,
    DatetimeMobileDesktopUsage,
    DatetimeLocalization,
    DatetimeGregorianJalaliHijri,
    DatetimeResponsive,
    DatetimeMobileDesktopDisplay,
    DatetimeMinMaxRestrictions,
    DatetimeSingleSelect,
    DatetimeRecurringValues,
    DatetimeRangeSelect,
    DatetimeUsageOnInputOrInline,
    DatetimeRtlRightToLeft,
    DatetimeSettingThePickerTimezone,
    CalendarDateTimePicker,
    CalendarEventHooks,
    CalendarWeekView,
    CalendarDotsColorsLabels,
    CalendarFormattingReturnValues,
    CalendarDisabledInvalidValues,
    CalendarSettingValuesDefaults,
    CalendarDateObjectISO8601Moment,
    CalendarThemesIosMaterialWindows,
    CalendarWeekToMonth,
    CalendarLocalization,
    CalendarMobileDesktopUsage,
    CalendarGregorianJalaliHijri,
    CalendarResponsive,
    CalendarMobileDesktopDisplay,
    CalendarDatePicker,
    CalendarMultipleMonths,
    CalendarMonthChangeDirectionWeekNumbersOuterDays,
    CalendarMinMaxRestrictions,
    CalendarSingleSelect,
    CalendarMultipleSelect,
    CalendarRecurringValues,
    CalendarCustomizingHeader,
    CalendarRangeSelect,
    CalendarHalfDayStyling,
    CalendarCustomizeMarkedDayShapes,
    CalendarUsageOnInputOrInline,
    CalendarRtlRightToLeft,
    CalendarAppointmentBooking,
    CalendarActivityCalendar,
    CalendarWeekSelect,
    CalendarQuarterYearView,
    CalendarSettingThePickerTimezone,
    SelectMultipleSelect,
    SelectMultipleLines,
    SelectCountryPicker,
    SelectEventHooks,
    SelectThemesIosMaterialWindows,
    SelectSettingValuesDefaults,
    SelectMobileDesktopUsage,
    SelectGroupOptions,
    SelectLocalization,
    SelectMobileDesktopDisplay,
    SelectSingleSelect,
    SelectResponsive,
    SelectRtlRightToLeft,
    SelectDisabledInvalidValues,
    SelectFilteringValues,
    SelectDataSources,
    SelectLinkedHierarchicalPickers,
    SelectItemTemplating,
    SelectImageText,
    RangeDisabledInvalidValues,
    RangeFlightBooking,
    RangePresets,
    RangeEventHooks,
    RangeDotsColorsLabels,
    RangeDateObjectISO8601Moment,
    RangeThemesIosMaterialWindows,
    RangeGregorianJalaliHijri,
    RangeMobileDesktopUsage,
    RangeResponsive,
    RangeMobileDesktopDisplay,
    RangeMinMaxRestrictions,
    RangeCalendarScrollerDropdown,
    RangeUsageOnInputOrInline,
    RangeDateRange,
    RangeTimeRange,
    RangeDateTimeRange,
    RangeWeekMonthViewScrollingDirection,
    RangeFormattingReturnValues,
    RangeCustomizingLabelsSelection,
    RangeMinMaxLength,
    RangeRecurringValues,
    RangeHalfDayStyling,
    RangeCustomizeMarkedDayShapes,
    RangeLocalization,
    RangeAddingEventStartEnd,
    RangeRtlRightToLeft,
    RangeDateFilteringWithPredefinedRanges,
    RangeBookRentalMonthsAhead,
    RangeSettingThePickerTimezone,
    FormsMobile,
    FormsResponsive,
    FormsThemesIosMaterialWindows,
    FormsDesktop,
    FormsPopup,
    FormsAlertConfirmPrompt,
    FormsNotifications,
    FormsButtons,
    FormsSegmented,
    FormsStepper,
    FormsButtonSegmentedStepperColors,
    FormsInputsTextAreasDateFields,
    FormsInputLabelTypes,
    FormsCheckbox,
    FormsSwitch,
    FormsRadioButton,
    EventcalendarEventHooks,
    EventcalendarLoadEventsFromRemoteApi,
    EventcalendarDesktopMonthView,
    EventcalendarLoadEventsOnDemand,
    EventcalendarMobileMonthView,
    EventcalendarMonthWeekView,
    EventcalendarDateObjectISO8601Moment,
    EventcalendarSwitchingDayWeekMonthView,
    EventcalendarResponsiveMonthView,
    EventcalendarEventPopover,
    EventcalendarLocalization,
    EventcalendarEventLabels,
    EventcalendarGregorianJalaliHijri,
    EventcalendarEventDataStructure,
    EventcalendarThemesIosMaterialWindows,
    EventcalendarRecurringEvents,
    EventcalendarLoadEventsFromGoogleCalendar,
    EventcalendarCustomizeEventPopover,
    EventcalendarCustomizeLabelLookAndFeel,
    EventcalendarCustomizingHeader,
    EventcalendarResourceFilteringInHeader,
    EventcalendarLoadInlineData,
    EventcalendarMoveResizeDragDropToCreateEvents,
    EventcalendarCreateReadUpdateDeleteCRUD,
    EventcalendarBlockedDaysRanges,
    EventcalendarExternalDragDropScheduleUnschedule,
    EventcalendarExternalEventPresets,
    EventcalendarColoredCellBackground,
    EventcalendarCustomEventSort,
    EventcalendarSettingTheTimezone,
    EventcalendarMultipleTimezoneSupport,
    EventcalendarRecurringEventAddEditDialog,
    EventcalendarQuarterYearView,
    EventcalendarCustomEventTooltip,
    EventcalendarPrintingTheView,
    EventcalendarShowMoreAllLabels,
    EventcalendarSyncEventsGoogleCalendar,
    EventcalendarSyncEventsOutlookCalendar,
    EventcalendarDisallowPastEventCreation,
    EventcalendarEventBulkActionsEditDeleteUpdate,
    EventcalendarCutCopyPasteEventsBetweenCalendars,
    EventcalendarSearchingEventsInPopup,
    EventcalendarSearchingEventsInSidebar,
    EventcalendarConditionalMoveResize,
    EventcalendarDragDropBetweenCalendarInstances,
    EventcalendarPreventDoubleBookingEvents,
    SchedulerMobileDayView,
    SchedulerDesktopDayView,
    SchedulerDesktopWeekView,
    SchedulerMobileWeekView,
    SchedulerResponsiveDayWeekSchedule,
    SchedulerSwitchingCalendarSchedulerAgenda,
    SchedulerEventDataStructure,
    SchedulerLoadEventsOnDemand,
    SchedulerLoadEventsFromRemoteApi,
    SchedulerGregorianJalaliHijri,
    SchedulerEventHooks,
    SchedulerLocalization,
    SchedulerThemesIosMaterialWindows,
    SchedulerRecurringEvents,
    SchedulerLoadEventsFromGoogleCalendar,
    SchedulerDateObjectISO8601Moment,
    SchedulerCustomizingEvents,
    SchedulerResourceFilteringInHeader,
    SchedulerCustomizingHeader,
    SchedulerLoadInlineData,
    SchedulerMoveResizeDragDropToCreateEvents,
    SchedulerCreateReadUpdateDeleteCRUD,
    SchedulerPreventDoubleBookingEvents,
    SchedulerTimeOffBlockedRanges,
    SchedulerWorkWeekHours,
    SchedulerShowHideHoursDays,
    SchedulerDisableAllDayEvents,
    SchedulerExternalDragDropScheduleUnschedule,
    SchedulerExternalEventPresets,
    SchedulerColoredCellBackground,
    SchedulerResourceView,
    SchedulerGroupByResourceByDay,
    SchedulerSharedEventsAcrossResources,
    SchedulerDynamicAddRemoveResourcesFilter,
    SchedulerCustomResourceHeaderTemplate,
    SchedulerSettingTheTimezone,
    SchedulerMultipleTimezoneSupport,
    SchedulerDateHeaderTemplate,
    SchedulerCustomEventTooltip,
    SchedulerPrintingTheView,
    SchedulerDisplayMultipleDaysWeeks,
    SchedulerRecurringEventAddEditDialog,
    SchedulerSyncEventsGoogleCalendar,
    SchedulerSyncEventsOutlookCalendar,
    SchedulerDisallowPastEventCreation,
    SchedulerCustomRangeView,
    SchedulerShowMultipleTimezones,
    SchedulerEventBulkActionsEditDeleteUpdate,
    SchedulerSearchingEventsInSidebar,
    SchedulerColorsInvalidsCssClass,
    SchedulerResourceDataStructure,
    SchedulerDoctorsAppointment,
    SchedulerConditionalMoveResize,
    SchedulerDragDropBetweenCalendarInstances,
    SchedulerControlNumberOfConcurrentlyShownEvents,
    AgendaLoadEventsFromRemoteApi,
    AgendaLoadEventsOnDemand,
    AgendaLoadEventsFromGoogleCalendar,
    AgendaEventDataStructure,
    AgendaEventHooks,
    AgendaDateObjectISO8601Moment,
    AgendaRecurringEvents,
    AgendaDailyWeeklyMonthlyAnnualAgenda,
    AgendaEventContentCustomization,
    AgendaFullEventCustomization,
    AgendaResourceFilteringInHeader,
    AgendaCustomizingHeader,
    AgendaLoadInlineData,
    AgendaDailyAgendaWithWeekCalendar,
    AgendaSynchronizedViews,
    AgendaThemesIosMaterialWindows,
    AgendaGregorianJalaliHijri,
    AgendaBasicUsage,
    AgendaCustomEventSort,
    AgendaLocalization,
    AgendaSettingTheTimezone,
    AgendaCustomEventTooltip,
    AgendaPrintingTheView,
    AgendaSyncEventsGoogleCalendar,
    AgendaSyncEventsOutlookCalendar,
    AgendaEventBulkActionsEditDeleteUpdate,
    AgendaSearchingEventsInPopup,
    AgendaEmptyState,
    TimelineTimelineTimeGrid,
    TimelineDailyWeeklyMonthlyYearlyTimeline,
    TimelineSwitchingDayWeekWorkWeekTimeline,
    TimelineTimelineResourceDetailsSidePanelFooter,
    TimelineTimelineResourceHeight,
    TimelineTimelineCustomEventRendering,
    TimelineMonthView,
    TimelineEventListing,
    TimelineEmployeeShifts,
    TimelineResourceGroupingHierarchy,
    TimelineWorkOrderScheduling,
    TimelineTimezoneMeetingPlanner,
    TimelineMealPlanner,
    TimelineShiftTemplate,
    TimelineRestaurantShiftManagement,
    TimelineResourceHeaderTemplate,
    TimelineSettingTheTimezone,
    TimelineMultipleTimezoneSupport,
    TimelineCustomEventTooltip,
    TimelinePrintingTheView,
    TimelineMultipleDaysWeeksMonthsQuartersYearsVariableResolution,
    TimelineMoveResizeDragDropToCreateEvents,
    TimelineEventDataStructure,
    TimelineDateObjectISO8601Moment,
    TimelineRecurringEvents,
    TimelineLoadEventsFromRemoteApi,
    TimelineLoadEventsOnDemand,
    TimelineCreateReadUpdateDeleteCRUD,
    TimelineThemesIosMaterialWindows,
    TimelineGregorianJalaliHijri,
    TimelineEventHooks,
    TimelineLocalization,
    TimelineRtlRightToLeft,
    TimelineLoadInlineData,
    TimelineSyncEventsGoogleCalendar,
    TimelineSyncEventsOutlookCalendar,
    TimelineDisallowPastEventCreation,
    TimelineLoadEventsFromGoogleCalendar,
    TimelineCustomRangeView,
    TimelineDynamicallyColorAndInvalidate,
    TimelineEventBulkActionsEditDeleteUpdate,
    TimelineLoadingBigDataSets,
    TimelineConnectingLinkingEventsArrows,
    TimelineSearchingEventsInSidebar,
    TimelineColorsInvalidsCssClass,
    TimelineHourDayWeekMonthQuarterYearHeaderFooterTemplate,
    TimelineSettingRowHeight,
    TimelineMonthlyTimetableVerticalDaysHorizontalTimes,
    TimelineMultiClassroomTimetable,
    TimelineLoadResourcesOnDemand,
    TimelineResourceDataStructure,
    TimelineConditionalMoveResize,
    TimelineDragDropBetweenCalendarInstances,
    TimelinePreventDoubleBookingEvents,
    TimelineCompareResourcesFixedAtTop,
    TimelineAssignUnassignWorkOrdersFixedTopRow,
    TimelineControlNumberOfConcurrentlyShownEvents,
    TimelineFlightSchedulingTwoSynchronizedTimelines,
  ],
  imports: [CommonModule, FormsModule, MbscModule, HttpClientJsonpModule, HttpClientModule, RouterLink],
  providers: [],
})
export class AppModule {}
