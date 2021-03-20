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
                html += '<tr>';
                html += '<td>' + item.EmployeeId + '</td>';
                html += '<td>' + item.Name + '</td>';
                html += '<td>' + item.Age + '</td>';
                html += '<td>' + item.State + '</td>';
                html += '<td>' + item.Country + '</td>';
                html += '<td>' + '<a href="#" onclick="return GetById(' + item.EmployeeId + ')">Edit</a> ' +
                    '| <a href="#" onclick="Delele(' + item.EmployeeId + ')">Delete</a></td>';  
                html += '</tr>'; 
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
    var validation = validate();
    if (validation === false) {
        return false;
    }  
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



function validate()
{
    var isValid = true;
    if ($('#Name').val().trim() === "")
    {
        $('#Name').css('border-color', 'red');
        isValid = false;
    }
    else {
        $('#Name').css('border-color', 'lightgrey');
    }
    if ($('#Age').val().trim() === "") {
        $('#Age').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Age').css('border-color', 'lightgrey');
    }
    if ($('#State').val().trim() === "") {
        $('#State').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#State').css('border-color', 'lightgrey');
    }

    if ($('#Country').val().trim() === "") {
        $('#Country').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Country').css('border-color', 'lightgrey');
    }

    return isValid;
}

function GetById(employeeId)
{
    debugger
    $.ajax({
        url: "/Employee/GetById/" + employeeId,
        //data: employeeId,
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data)
        {
            $('#EmployeeID').val(data.EmployeeID);  
            $("#Name").val(data.Name);
            $('#Age').val(data.Age);
            $('#State').val(data.State);
            $('#Country').val(data.Country);

            $("#employeeModal").modal('show');
            $('#btnUpdate').show();
            $('#btnAdd').hide();  
        },
         error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
    return false;
}