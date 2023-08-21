$(document).ready(function () {

    $("#Monthly").MonthPicker();
});
  //   $("#monthPicker").datepicker({
  //     changeMonth: true,
  //     changeYear: true,
  //     dateFormat: "yy-mm",
  //     onClose: function (selectedDate) {
  //       // Set the minimum and maximum dates for the day picker
  //       var selectedMonth = new Date(selectedDate + "-01");
  //       var firstDay = new Date(
  //         selectedMonth.getFullYear(),
  //         selectedMonth.getMonth(),
  //         1
  //       );
  //       var lastDay = new Date(
  //         selectedMonth.getFullYear(),
  //         selectedMonth.getMonth() + 1,
  //         0
  //       );

  //       // Initialize day picker
  //       $("#dayPicker").datepicker("option", "minDate", firstDay);
  //       $("#dayPicker").datepicker("option", "maxDate", lastDay);
  //       $("#dayPicker").datepicker("refresh");
  //     },
  //   });

  //   // Initialize day picker
  //   $("#dayPicker").datepicker({
  //     dateFormat: "yy-mm-dd",
  //   });

  /* Date picker for date fields */
//   $("#OvertimeDate").click(
//     datepicker({
//       dateFormat: "mm/dd/yy",
//     })
//   );
  //   $("#Daily").datepicker({
  //     dateFormat: "mm/dd/yy",
  //   });


  //     {
  //     onClose: function () {
  //       // Set the minimum and maximum dates for the day picker
  //       var month = $(".Monthly").MonthPicker("GetSelectedYear");
  //       var year = $("#Monthly").MonthPicker("GetSelectedYear");
  //       var firstDay = new Date(year, month, 1);
  //       var lastDay = new Date(year, month + 1, 0);

  //       // Initialize day picker
  //       $("#OvertimeDate").datepicker("option", "minDate", firstDay);
  //       $("#OvertimeDate").datepicker("option", "maxDate", lastDay);
  //       $("#OvertimeDate").datepicker("refresh");
  //     },
  //   }

  //   $("#Monthly").click(function () {
  //     $("#Daily").prop("disabled", true);
  //   });

  //   $("#Daily").click(function () {
  //     $("#Monthly").prop("disabled", true);
  //   });
});

// $.fn.monthYearPicker = function (options) {
//   options = $.extend(
//     {
//       dateFormat: "yy/mm",
//       changeMonth: true,
//       changeYear: true,
//       showButtonPanel: true,
//       showAnim: "",
//     },
//     options
//   );

//   function hideDaysFromCalendar() {
//     var thisCalendar = $(this);
//     $(".ui-datepicker-calendar").detach();
//     // Also fix the click event on the Done button.
//     $(".ui-datepicker-close")
//       .unbind("click")
//       .click(function () {
//         var month = $(
//           "#ui-datepicker-div .ui-datepicker-month :selected"
//         ).val();
//         var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
//         thisCalendar.datepicker("setDate", new Date(year, month, 1));
//       });
//   }
//   $(this).datepicker(options).focus(hideDaysFromCalendar);
// };

// /**
//  * Process to show approve confirm modal
//  */
// function approveOvertime(value) {
//   $("#approvedOTId").val(value);
//   $("#overtimeApprove").modal("show");
// }
