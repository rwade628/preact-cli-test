// Dependencies
import { h, Component } from "preact";

//State
import { connect } from 'preact-redux';
import { bindActions } from '../../redux/util';
import reduce from '../../redux/reducers';
import * as actions from '../../redux/actions';

// Material Components
import GridList from "preact-material-components/GridList";

// Class
@connect(reduce, bindActions(actions))
export default class GridListPage extends Component {
  componentDidMount() {
    this.props.getList(this.props.folder)
  }

  render() {
    return (
      <div>
        <GridList
          header-caption={true}
          with-icon-align="end"
          twoline-caption={true}
          tile-gutter-1={true}
          tile-aspect-ratio="16x9"
        >
          <GridList.Tiles>
            <GridList.Tile>
              <GridList.PrimaryTile>
                <GridList.PrimaryContentTile src="../../../images/GridListTileSample.png" />
              </GridList.PrimaryTile>
              <GridList.SecondaryTile>
                <GridList.IconTile onClick={() => console.log("Edit Tile")}>
                  edit
                </GridList.IconTile>
                <GridList.TitleTile>Tile One</GridList.TitleTile>
                <GridList.SupportTextTile>
                  subheading one
                </GridList.SupportTextTile>
              </GridList.SecondaryTile>
            </GridList.Tile>
            <GridList.Tile>
              <GridList.PrimaryTile>
                <GridList.PrimaryContentTile src="../../../images/GridListTileSample.png" />
              </GridList.PrimaryTile>
              <GridList.SecondaryTile>
                <GridList.IconTile onClick={() => console.log("Edit Tile")}>
                  edit
                </GridList.IconTile>
                <GridList.TitleTile>Tile Two</GridList.TitleTile>
                <GridList.SupportTextTile>
                  subheading two
                </GridList.SupportTextTile>
              </GridList.SecondaryTile>
            </GridList.Tile>
          </GridList.Tiles>
        </GridList>
      </div>
    );
  }
}