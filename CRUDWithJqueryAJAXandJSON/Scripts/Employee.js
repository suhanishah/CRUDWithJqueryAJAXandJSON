$(document).ready(function () {
    loadData();
}); 

function loadData()
{
    $.ajax({
        url: "/Employee/EmployeeList",
        type: "GET",
        contentType: "application/json-charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            $.each(result, function (key, item) {
                html += '<tr>'
                html += '<td>' + item.EmployeeId + '</td>';
                html += '<td>' + item.Name + '</td>';
                html += '<td>' + item.Age + '</td>';
                html += '<td>' + item.State + '</td>';
                html += '<td>' + item.Country + '</td>';
            });
            $('.tbody').html(html);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function Add()
{
    debugger
    var empObj =
        {
            EmployeeID: $('#EmployeeID').val(),
            Name: $('#Name').val(),
            Age: $('#Age').val(),
            State: $('#State').val(),
            Country: $('#Country').val()
        };
    $.ajax({
        url: "/Employee/Add",
        data: JSON.stringify(empObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result)
        {
            loadData();
            $('#employeeModal').modal('hide');
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }  
    });
}