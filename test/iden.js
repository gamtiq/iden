"use strict";

/* global chai, window */

// Tests for iden
describe("iden", function idenTestSuite() {
    var expect, iden;
    
    // node
    if (typeof chai === "undefined") {
        iden = require("../dist/iden.js");
        expect = require("./lib/chai").expect;
    }
    // browser
    else {
        iden = window.iden;
        expect = chai.expect;
    }
    
    
    describe("getUuid", function getUuidTestSuite() {
        var getUuid = iden.getUuid;
        
        function getNumber() {
            // eslint-disable-next-line no-magic-numbers
            return 0.5;
        }
        
        /* eslint-disable func-names, no-magic-numbers */
        it("should return string that matches format of UUID RFC 4122 v4", function() {
            var uuidRegExp = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
            
            expect( getUuid() )
                .match(uuidRegExp);
            expect( getUuid({shift: true}) )
                .match(uuidRegExp);
            expect( getUuid({shift: 1234567890}) )
                .match(uuidRegExp);
            expect( getUuid({rng: getNumber}) )
                .match(uuidRegExp);
            expect( getUuid({rng: getNumber, shift: 10}) )
                .match(uuidRegExp);
        });
        
        it("should return different value in the next call", function() {
            var idList = [getUuid()],
                nK = 100,
                nI = 0;
            
            function checkNext(settings) {
                var sId = getUuid(settings),
                    // eslint-disable-next-line no-shadow
                    nI, nL;
                for (nI = 0, nL = idList.length; nI < nL; nI++) {
                    expect(sId)
                        .not.equal(idList[nI]);
                }
                idList.push(sId);
            }
            
            while (nI++ < nK) {
                if (nI < 30) {
                    checkNext();
                }
                else if (nI < 60) {
                    checkNext({shift: true});
                }
                else if (nI < 70) {
                    checkNext({shift: 1234567 * nI});
                }
                else {
                    /* eslint-disable indent */
                    checkNext({
                                shift: new Date().getTime() + (nI * 123),
                                // eslint-disable-next-line no-loop-func
                                rng: function() {
                                    return nI * 0.01;
                                }
                              });
                    /* eslint-enable indent */
                }
            }
        });
        
        it("should return definite value", function() {
            expect( getUuid({rng: getNumber}) )
                .equal("88888888-8888-4888-8888-888888888888");
        });
    });
});
