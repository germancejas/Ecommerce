import React from 'react';

function order() {

    return (
        <div className="d-flex ">

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Quantity</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Name</th>
                        <th scope="col">Package</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td> Patagonia </td>
                        <td> Weisse</td>
                        <td> 743cc</td>
                        <td>$450</td>
                    </tr>
                </tbody>
            </table>

        </div >

    );
};

export default order;