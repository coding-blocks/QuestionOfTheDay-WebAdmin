/**
 * Created by championswimmer on 18/10/16.
 */

Parse.initialize("yE4lpdHmxauOKRs4O4cRopxBr9r8QyOwgTURlrV7", "G9RZjIvyOOJmAMZKMaadN5pxkPcMffDNHY56MB1A");
Parse.serverURL = 'https://parseapi.back4app.com';

var DB = {
    Models: {}
};

DB.Models.Question = Parse.Object.extend("Question");
