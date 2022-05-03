import Component from '@glimmer/component';

/**
 * Litepicker component
 *
 * Usage:
 *
 * * Base
 * ``` handlebars
 * <Litepicker @onSelect={{action "onSelect"}} />
 * ```
 * * Full
 * ``` handlebars
 * <Litepicker @secondField={{null}} @firstDay={{1}} @parentEl="body" @lang="auto" @format="DD/MM/YYYY" @separator=" - " @numberOfMonths={{1}} @numberOfColumns={{2}} @singleDate={{true}} @autoclose={{true}} @repick={{false}} @value={{null}} @startDate={{null}} @endDate={{null}} @minDate={{null}} @maxDate={{null}} @disableDates={{null}} @selectForward={{false}} @selectBackward={{false}} @minDays={{null}} @maxDays={{null}} @hoveringTooltip={{true}} @hideOnBodyClick={{true}} @footer={{false}} @disabledDatesInRange={{true}} @tooltipNights={{false}} @orientation={{"auto"}} @disableWeekends={{false}} @inline={{false}} @weekdayStyle="short" @dropdowns={{hash years=(hash min=1900 max= null) months=true}} @locale={{hash buttons=(hash prev="&leftarrow;" next="&rightarrow;" close="&times;" reset="Reset" apply="Apply" tooltip=(hash one="day" other="days" tooltipOnDisabled=null }} @onSelect={{action "onSelect"}} @onSelectStart={{action "onSelectStart"}} @onSelectEnd={{action "onSelectEnd"}} @onOpen={{action "onOpen"}} @onClose={{action "onClose"}} @onError={{action "onError"}} @onMonthsChange={{action "onMonthsChange"}} @onYearsChange={{action "onYearsChange"}}/>
 * ```
 *
 * @class Litepicker
 * @public
 */
export default class LitepickerComponent extends Component {}
