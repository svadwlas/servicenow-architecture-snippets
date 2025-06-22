// Business Rule: Set Assignment Group for Priority 1
(function executeRule(current, gsn, gs) {
    if (current.priority == 1 && !current.assignment_group) {
        current.assignment_group.setDisplayValue("Critical Incident Response");
    }
})(current, gsn, gs);
