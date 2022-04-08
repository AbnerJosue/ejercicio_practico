import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../logic/actions/chucknorris";
import * as selectors from "../logic/reducer";
import ProgressBarGeneral from "../progressGeneral";
import DenseAppBar from "../appBarGeneral";
import RecipeReviewCard from "../listCard";

const List = ({
    isLoadingStatus,
    isCompletedStatus,
    fetchInformation
}) => {


    useEffect(() => {
        fetchInformation();
    }, [])

    console.log(isCompletedStatus)

    return (
        <Fragment>
            {
                isLoadingStatus ? (
                    <ProgressBarGeneral />
                ) : (
                    <Fragment>
                        <DenseAppBar title={"LISTA"} />

                        {

                            <RecipeReviewCard
                                info={isCompletedStatus}
                            />
                        }
                    </Fragment>
                )
            }

        </Fragment>
    )
}

export default connect(
    (state) => ({
        isLoadingStatus: selectors.gettingData(state),
        isCompletedStatus: selectors.getData(state),
    }),
    (dispatch) => ({
        fetchInformation() {
            dispatch(actions.fetching_chucknorris());
        },
    })
)(List);