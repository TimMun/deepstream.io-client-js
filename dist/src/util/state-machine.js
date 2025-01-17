"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateMachine = void 0;
var StateMachine = /** @class */ (function () {
    function StateMachine(logger, stateMachine) {
        this.stateMachine = stateMachine;
        this.inEndState = false;
        this.transitions = stateMachine.transitions;
        this.state = stateMachine.init;
        this.context = stateMachine.context;
        this.history = [{ oldState: '-', newState: this.state, transitionName: '-' }];
    }
    /**
     * Try to perform a state change
     */
    StateMachine.prototype.transition = function (transitionName) {
        var transition;
        for (var i = 0; i < this.transitions.length; i++) {
            transition = this.transitions[i];
            if (transitionName === transition.name && (this.state === transition.from || transition.from === undefined)) {
                this.history.push({ oldState: this.state, transitionName: transitionName, newState: transition.to });
                var oldState = this.state;
                this.state = transition.to;
                if (this.stateMachine.onStateChanged) {
                    this.stateMachine.onStateChanged.call(this.context, this.state, oldState);
                }
                if (transition.handler) {
                    transition.handler.call(this.context);
                }
                if (transition.isEndState === true) {
                    this.inEndState = true;
                }
                return;
            }
        }
        var details = JSON.stringify({ transition: transitionName, fromState: this.state });
        var debugHistory = this.history.reverse().reduce(function (result, entry) {
            return result += "\n\tFrom ".concat(entry.oldState, " to ").concat(entry.newState, " via ").concat(entry.transitionName);
        }, '');
        console.trace("Invalid state transition.\nDetails: ".concat(details, " \nHistory: ").concat(debugHistory));
    };
    return StateMachine;
}());
exports.StateMachine = StateMachine;
