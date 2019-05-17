function getLastUpdate(url,id) {
    console.log(url);
    $(document).ready(function(){
        $.ajax({url: url, success: function(result){
            var lastUpdate = result.commit.commit.author.date
            var brLastUpdate = new brDate(lastUpdate);
            console.log(brLastUpdate.newDate);
            document.getElementById(id+ "_time").innerHTML = brLastUpdate.newDate;
        }});
    });
}

class brDate {
    constructor(date) {
        this.year = date.split("-")[0];
        this.month = date.split("-")[1];
        this.day = date.split("-")[2].split("T")[0];
        this.newDate = this.day + "/" + this.month  + "/" + this.year;
    }
}
