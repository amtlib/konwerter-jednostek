function update_output_value(value) {
    document.getElementById("output").value = value;
}

function convert(input, input_type, output_type) {
    return parseFloat(input) * parseFloat(input_type) / parseFloat(output_type);
}

function mark_error_in_input() {
    document.getElementById("user_input").classList.add("error");
}

function unmark_error_in_input() {
    document.getElementById("user_input").classList.remove("error");
}

function convert_and_show() {
    var user_input_field = document.getElementById("user_input");
    var user_input_type_field = document.getElementById("user_input_type");
    var output_type_field = document.getElementById("output_type");
    var converted_value = convert(user_input_field.value, user_input_type_field.value, output_type_field.value);
    if (user_input_field.value === '') {
        unmark_error_in_input();
        update_output_value('');
    }
    else if (isNaN(converted_value)) {
        mark_error_in_input()
        update_output_value('');
    }
    else {
        unmark_error_in_input();
        update_output_value(converted_value);
    }
}

document.getElementById("user_input").onkeyup = convert_and_show;
document.getElementById("user_input_type").onchange = convert_and_show;
document.getElementById("output_type").onchange = convert_and_show;
