) {

    return (
        <div className="newReportGrid">
            <NewReportNavSidebar phase={this.state.phase} candidate={this.state.candidate} company={this.state.company} />
            <div className="verticalBorder"></div>
            {this.state.phase === 1 ? <SelectCandidate backHandler={this.backHandler} nextHandler={this.nextHandler} getCandidate={this.getCandidate} phase={this.state.phase} isComponentActive={this.state.isComponentActive} /> : ""}
            {this.state.phase === 2 ? <SelectCompany backHandler={this.backHandler} nextHandler={this.nextHandler} getCompany={this.getCompany} /> : ""}
            {this.state.phase === 3 ? <NewReportDetailsPage backHandler={this.backHandler} submitHandler={this.submitHandler} phase={this.state.phase} /> : ""}
            
        </div>
